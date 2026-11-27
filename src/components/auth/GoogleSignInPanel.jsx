import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { GoogleAuthProvider, getAdditionalUserInfo, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase.js'
import describeError from '../../utils/describeError.js'
import BusyButton from '../feedback/BusyButton.jsx'
import StatusMessage from '../feedback/StatusMessage.jsx'
import ExternalLink from '../layout/ExternalLink.jsx'
import GoogleLogo from './GoogleLogo.jsx'

const REDIRECT_DELAY_MS = 1200

// Always show Google's account chooser so users can switch accounts
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

/**
 * "Log in or sign up" box. A user's first Google sign-in also creates their
 * Firebase account, so this one button handles both.
 * @param {{destination: string|object}} props - Where to go after signing in.
 */
export default function GoogleSignInPanel({ destination }) {
  const navigate = useNavigate()
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [status, setStatus] = useState(null)
  const [isDone, setIsDone] = useState(false)

  // After a successful sign-in, pause so the welcome message can be read, then move on
  useEffect(() => {
    if (!isDone) {
      return undefined
    }
    const timer = setTimeout(() => navigate(destination, { replace: true }), REDIRECT_DELAY_MS)
    return () => clearTimeout(timer)
  }, [isDone, destination, navigate])

  async function handleSignIn() {
    setIsSigningIn(true)
    setStatus(null)

    try {
      const result = await signInWithPopup(auth, googleProvider)
      const name = result.user.displayName || result.user.email
      const greeting = getAdditionalUserInfo(result).isNewUser
        ? `Account created. Welcome, ${name}!`
        : `Welcome back, ${name}!`

      setStatus({ type: 'success', text: `${greeting} Taking you there now...` })
      setIsDone(true)
    } catch (error) {
      setStatus({ type: 'error', text: describeError(error) })
      setIsSigningIn(false)
    }
  }

  return (
    <section className="auth-panel" aria-labelledby="login-heading">
      <h2 id="login-heading">Log in or sign up</h2>
      <p>Log in using your Google account. If you don&apos;t have an account yet, one will be created automatically.</p>
      <BusyButton
        className="button google-button button-full"
        isBusy={isSigningIn}
        busyText="Waiting for Google..."
        onClick={handleSignIn}
      >
        <GoogleLogo />
        Continue with Google
      </BusyButton>
      <p className="auth-help">
        <ExternalLink href="https://accounts.google.com/signin/recovery">Forgot your password?</ExternalLink>
      </p>
      <StatusMessage status={status} />
    </section>
  )
}
