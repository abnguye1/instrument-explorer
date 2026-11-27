import { useAuth } from '../auth/AuthContext.js'
import Breadcrumb from '../components/layout/Breadcrumb.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'

/**
 * /contact: send a suggestion, question, or correction (saved to Firebase).
 */
export default function ContactPage() {
  const { user } = useAuth()

  return (
    <>
      <title>Contact Us | Instrument History Explorer</title>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
      <h1>Contact Us!</h1>
      <p className="flavor-text">
        Have an instrument we should feature, a source to recommend, or a correction to share? Submit a
        message below and we&apos;ll get back to you as soon as possible.
      </p>
      <ContactForm user={user} />
    </>
  )
}
