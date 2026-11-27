import ExternalLink from '../components/layout/ExternalLink.jsx'

/**
 * "Instrument Profile" links to outside sources. Renders nothing if empty.
 */
export default function FurtherReading({ resources = [] }) {
  if (resources.length === 0) {
    return null
  }

  return (
    <>
      <h3>Instrument Profile</h3>
      <p>Further reading is available from:</p>
      <ul>
        {resources.map((resource) => (
          <li key={resource.url}>
            <cite><ExternalLink href={resource.url}>{resource.title}</ExternalLink></cite>
          </li>
        ))}
      </ul>
    </>
  )
}
