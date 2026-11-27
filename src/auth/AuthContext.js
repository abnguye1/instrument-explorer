import { createContext, useContext } from 'react'

// Holds { user, isLoading } for the whole app (provided by AuthProvider)
export const AuthContext = createContext({ user: null, isLoading: true })

/**
 * Returns the current sign-in state.
 * user is the Firebase user (or null); isLoading is true until Firebase has
 * checked for a saved login.
 */
export function useAuth() {
  return useContext(AuthContext)
}
