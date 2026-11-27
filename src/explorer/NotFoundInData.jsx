import { Link } from 'react-router'

/**
 * Shown when a URL names a family or instrument that isn't in the database.
 */
export default function NotFoundInData({ what }) {
  return (
    <div className="status-box error" role="alert">
      <h1>We couldn't find that {what}</h1>
      <p>The link may be mistyped, or the {what} may have been removed.</p>
      <Link className="button" to="/explore">Back to all families</Link>
    </div>
  )
}
