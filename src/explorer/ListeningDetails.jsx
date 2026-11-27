/**
 * "Listening details" list of what to listen for. Renders nothing if empty.
 */
export default function ListeningDetails({ details = [] }) {
  if (details.length === 0) {
    return null
  }

  return (
    <>
      <h3>Listening details</h3>
      <ul className="detail-list">
        {details.map((detail) => (
          <li key={detail.title}>
            <strong>{detail.title}: </strong>
            <span>{detail.description}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
