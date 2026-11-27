/**
 * Red error box with an explanation and a Retry button.
 */
export default function ErrorPanel({ title, message, onRetry }) {
  return (
    <div className="status-box error" role="alert">
      <h2>{title}</h2>
      <p>{message}</p>
      <button type="button" className="button" onClick={onRetry}>
        Retry Loading
      </button>
    </div>
  )
}
