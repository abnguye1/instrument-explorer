import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from './AuthContext.js'
import LoadingPanel from '../components/feedback/LoadingPanel.jsx'

/**
 * Route guard for every page after Home. While Firebase checks for a saved
 * login it shows a spinner; signed-out visitors are sent to /login, which
 * remembers where they were going (state.from) so it can send them back.
 */
export default function RequireAuth() {
  const { user, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <LoadingPanel message="Checking your sign-in..." />
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <Outlet />
}
