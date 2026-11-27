import { useLocation } from 'react-router'
import { useAuth } from '../auth/AuthContext.js'
import Breadcrumb from '../components/layout/Breadcrumb.jsx'
import StatusMessage from '../components/feedback/StatusMessage.jsx'
import GoogleSignInPanel from '../components/auth/GoogleSignInPanel.jsx'

/**
 * Picks the message explaining why the visitor is on the login page.
 */
function getContextStatus(routeState, user) {
  if (routeState?.loggedOut) {
    // Stay quiet until Firebase confirms the sign-out (the nav button shows progress)
    return user ? null : { type: 'success', text: 'You have been logged out. See you next time!' }
  }
  if (user) {
    return { type: 'info', text: `You're logged in as ${user.email}. Use the navigation above to keep exploring.` }
  }
  if (routeState?.from) {
    return { type: 'info', text: 'Please log in with Google to continue exploring.' }
  }
  return null
}

/**
 * /login: Google sign-in. RequireAuth sends visitors here with state.from set
 * to the page they wanted, so they can be returned there afterwards.
 */
export default function LoginPage() {
  const location = useLocation()
  const { user } = useAuth()
  const destination = location.state?.from ?? '/explore'

  return (
    <>
      <title>Log In | Instrument History Explorer</title>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Log In' }]} />
      <h1>Log in to start exploring</h1>
      <p className="flavor-text">Log in to access the Instrument History Explorer.</p>
      <StatusMessage status={getContextStatus(location.state, user)} />
      <GoogleSignInPanel destination={destination} />
    </>
  )
}
