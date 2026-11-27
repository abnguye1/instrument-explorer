import { useState } from 'react'
import { push, ref, serverTimestamp } from 'firebase/database'
import { db } from '../../firebase.js'
import describeError from '../../utils/describeError.js'
import BusyButton from '../feedback/BusyButton.jsx'
import StatusMessage from '../feedback/StatusMessage.jsx'
import FormField from './FormField.jsx'

const TOPICS = {
  suggest: 'Suggest an instrument',
  question: 'Ask a question',
  correction: 'Report an error',
  general: 'General feedback / Other',
}

/**
 * Contact form (a "controlled" form: React state holds every field's value).
 * Submissions are saved to /messages in the Realtime Database.
 * @param {{user: import('firebase/auth').User}} props - The signed-in user.
 */
export default function ContactForm({ user }) {
  const emptyForm = { name: user.displayName || '', email: user.email, topic: 'suggest', message: '' }
  const [form, setForm] = useState(emptyForm)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState(null)

  // One change handler for every field, keyed by the input's name attribute
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const submission = {
      name: form.name.trim(),
      email: form.email.trim(),
      topic: form.topic,
      message: form.message.trim(),
    }

    if (!submission.name || !submission.message) {
      setStatus({ type: 'error', text: 'Please fill in your name and a message before submitting.' })
      return
    }

    setIsSending(true)
    setStatus(null)
    try {
      // uid lets the security rules check who sent it; the server fills in the time
      const savedRef = await push(ref(db, 'messages'), { ...submission, uid: user.uid, createdAt: serverTimestamp() })
      const referenceCode = savedRef.key.slice(-6).toUpperCase()
      setForm(emptyForm)
      setStatus({
        type: 'success',
        text: `Thanks, ${submission.name}! Your "${TOPICS[submission.topic]}" message was received and saved (reference #${referenceCode}). We'll reply to ${submission.email}.`,
      })
    } catch (error) {
      setStatus({ type: 'error', text: `Your message could not be sent: ${describeError(error)}` })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Contact submission form">
      <FormField id="senderName" label="Your Name">
        <input id="senderName" name="name" type="text" required autoComplete="name" placeholder="e.g. Jane Doe" value={form.name} onChange={handleChange} />
      </FormField>
      <FormField id="senderEmail" label="Email Address">
        <input id="senderEmail" name="email" type="email" required autoComplete="email" placeholder="e.g. jane@example.com" value={form.email} onChange={handleChange} />
      </FormField>
      <FormField id="messageTopic" label="Message Type">
        <select id="messageTopic" name="topic" value={form.topic} onChange={handleChange}>
          {Object.entries(TOPICS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </FormField>
      <FormField id="messageBody" label="Message">
        <textarea id="messageBody" name="message" required placeholder="Write your message or suggestion here..." value={form.message} onChange={handleChange} />
      </FormField>
      <BusyButton type="submit" isBusy={isSending} busyText="Sending message...">
        Submit Message
      </BusyButton>
      <StatusMessage status={status} />
    </form>
  )
}
