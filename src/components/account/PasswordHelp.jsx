import { useEffect, useRef, useState } from 'react'
import ExternalLink from '../layout/ExternalLink.jsx'

/**
 * "Change Password" for Google accounts. Google owns the password, so the
 * button reveals instructions and a link to Google's security settings.
 */
export default function PasswordHelp() {
  const [isOpen, setIsOpen] = useState(false)
  const googleLinkRef = useRef(null)

  // When the message opens, move keyboard focus to the Google link inside it
  useEffect(() => {
    if (isOpen) {
      googleLinkRef.current.focus()
    }
  }, [isOpen])

  return (
    <section className="auth-panel" aria-labelledby="password-heading">
      <h2 id="password-heading">Password</h2>
      <p>Need a new password? Choose the button below to see how.</p>
      <button
        type="button"
        className="button"
        aria-expanded={isOpen}
        aria-controls="passwordInfo"
        onClick={() => setIsOpen(!isOpen)}
      >
        Change Password
      </button>
      <div id="passwordInfo" className="form-message info" hidden={!isOpen}>
        <p>
          This account uses Google Sign-In. You can manage your password and security settings directly
          through your Google Account.
        </p>
        <ExternalLink href="https://myaccount.google.com/security" ref={googleLinkRef}>
          Open Google Account security settings (opens in a new tab)
        </ExternalLink>
      </div>
    </section>
  )
}
