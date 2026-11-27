import Spinner from './Spinner.jsx'

/**
 * Centered box with a large spinner, shown while waiting on Firebase.
 */
export default function LoadingPanel({ message }) {
  return (
    <div className="status-box" role="status">
      <Spinner large />
      <p>{message}</p>
    </div>
  )
}
