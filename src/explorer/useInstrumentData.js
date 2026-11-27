import { useEffect, useState } from 'react'
import { get, ref } from 'firebase/database'
import { db } from '../firebase.js'
import describeError from '../utils/describeError.js'

// The instrument data never changes, so after the first successful load it is
// kept here for the rest of the visit. Leaving and re-opening the explorer then
// shows it instantly instead of downloading it again.
let cachedFamilies = null

/**
 * Converts a Realtime Database list (stored as an array or keyed object) to an array.
 */
function toArray(value) {
  if (!value) {
    return []
  }
  return Array.isArray(value) ? value.filter(Boolean) : Object.values(value)
}

/**
 * Reads /families from the Realtime Database once with get(), then reuses the
 * cached copy on later visits to the explorer.
 * @returns {{families: Array, isLoading: boolean, error: string|null, retry: Function}}
 */
export default function useInstrumentData() {
  const [data, setData] = useState(() =>
    cachedFamilies
      ? { families: cachedFamilies, isLoading: false, error: null }
      : { families: [], isLoading: true, error: null }
  )
  // Changing this number re-runs the effect, which tries the read again (used by Retry)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    if (cachedFamilies) {
      return undefined
    }

    // Ignore a result that arrives after the explorer was left
    let isCurrent = true

    async function loadFamilies() {
      try {
        const snapshot = await get(ref(db, 'families'))
        if (!isCurrent) {
          return
        }
        if (!snapshot.exists()) {
          setData({ families: [], isLoading: false, error: 'No instrument data was found in the database.' })
          return
        }
        cachedFamilies = toArray(snapshot.val()).map((family) => ({
          ...family,
          instruments: toArray(family.instruments),
        }))
        setData({ families: cachedFamilies, isLoading: false, error: null })
      } catch (error) {
        if (isCurrent) {
          setData({ families: [], isLoading: false, error: describeError(error) })
        }
      }
    }

    loadFamilies()
    return () => {
      isCurrent = false
    }
  }, [attempt])

  function retry() {
    setData({ families: [], isLoading: true, error: null })
    setAttempt((count) => count + 1)
  }

  return { ...data, retry }
}
