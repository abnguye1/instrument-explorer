import { Link } from 'react-router'

/**
 * Shown for any address that doesn't match a route.
 */
export default function NotFoundPage() {
  return (
    <>
      <title>Page Not Found | Instrument History Explorer</title>
      <div className="status-box">
        <h1>Page not found</h1>
        <p>That page doesn&apos;t exist. It may have been moved, or the link may be mistyped.</p>
        <Link className="button" to="/">Go to the Home page</Link>
      </div>
    </>
  )
}
