import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.js'
import { AuthContext } from './AuthContext.js'

/**
 * Listens to Firebase Authentication and shares the signed-in user with every
 * component below it, so any component can call useAuth().
 */
export default function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({ user: null, isLoading: true })

  useEffect(() => {
    // Runs on load and whenever the user logs in or out; returns its own cleanup
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthState({ user, isLoading: false })
    })
    return unsubscribe
  }, [])

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
}
