/**
 * On-page success / error / info message (used instead of window.alert).
 * Renders nothing when there is no status. Errors use role="alert" so screen
 * readers announce them immediately; others use the polite role="status".
 * @param {{status: {type: 'success'|'error'|'info', text: string} | null}} props
 */
export default function StatusMessage({ status }) {
  if (!status) {
    return null
  }

  return (
    <p className={`form-message ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>
      {status.text}
    </p>
  )
}
