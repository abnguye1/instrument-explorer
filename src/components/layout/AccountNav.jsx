import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.js'
import { useAuth } from '../../auth/AuthContext.js'
import BusyButton from '../feedback/BusyButton.jsx'

/**
 * Right side of the navigation: "Log In" when signed out, or "Account" and a
 * "Log Out" button when signed in.
 */
export default function AccountNav() {
  const { user, isLoading } = useAuth()
  const navigate = useNavigate()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [logOutFailed, setLogOutFailed] = useState(false)

  async function handleLogOut() {
    setIsLoggingOut(true)
    setLogOutFailed(false)
    // Leave protected pages first; otherwise RequireAuth would redirect as soon
    // as the user is cleared and the "logged out" message would be lost
    navigate('/login', { replace: true, state: { loggedOut: true } })
    try {
      await signOut(auth)
    } catch {
      setLogOutFailed(true)
    } finally {
      setIsLoggingOut(false)
    }
  }

  // Avoid flashing "Log In" while Firebase restores a saved login
  if (isLoading) {
    return null
  }

  if (!user) {
    return (
      <NavLink to="/login" className="nav-login" aria-label="Log in with Google">
        Log In
      </NavLink>
    )
  }

  return (
    <>
      <NavLink to="/account">Account</NavLink>
      <BusyButton
        className="nav-login nav-logout"
        isBusy={isLoggingOut}
        busyText="Logging out..."
        onClick={handleLogOut}
      >
        {logOutFailed ? 'Log out failed. Retry' : 'Log Out'}
      </BusyButton>
    </>
  )
}
