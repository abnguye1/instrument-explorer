import Spinner from './Spinner.jsx'

/**
 * A button that shows a spinner and busy text while a request is running.
 * It is disabled while busy so a double click can't send the request twice.
 */
export default function BusyButton({ isBusy, busyText, children, className = 'button', type = 'button', onClick }) {
  return (
    <button type={type} className={className} onClick={onClick} disabled={isBusy} aria-busy={isBusy}>
      {isBusy ? (
        <>
          <Spinner />
          {busyText}
        </>
      ) : (
        children
      )}
    </button>
  )
}
