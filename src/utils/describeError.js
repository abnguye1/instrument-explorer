// Plain-language versions of the most common Firebase error codes
const FRIENDLY_ERRORS = {
  'auth/popup-closed-by-user': 'The Google sign-in window was closed before you finished. Choose "Continue with Google" to try again.',
  'auth/cancelled-popup-request': 'Another sign-in window is already open. Finish signing in there.',
  'auth/popup-blocked': 'Your browser blocked the Google sign-in window. Allow pop-ups for this site, then try again.',
  'auth/unauthorized-domain': 'This website is not yet allowed to use Google sign-in. Add its domain under Firebase Authentication > Settings > Authorized domains.',
  'auth/operation-not-allowed': 'Google sign-in is not turned on for this Firebase project yet.',
  'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
  'auth/network-request-failed': 'Network error. Check your connection and try again.',
  PERMISSION_DENIED: "You don't have permission to do that. Please make sure you are logged in.",
}

/**
 * Converts a Firebase error into a readable message, falling back to
 * Firebase's own message when no friendlier wording is known.
 * @param {Error & {code?: string}} error - The caught error.
 * @returns {string}
 */
export default function describeError(error) {
  // Database permission errors arrive as a message rather than a code
  if (error?.message?.includes('PERMISSION_DENIED')) {
    return FRIENDLY_ERRORS.PERMISSION_DENIED
  }
  return FRIENDLY_ERRORS[error?.code] || error?.message || 'Something went wrong. Please try again.'
}
