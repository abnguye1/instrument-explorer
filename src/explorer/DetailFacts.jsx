import { Link } from 'react-router'
import ListeningDetails from './ListeningDetails.jsx'
import FurtherReading from './FurtherReading.jsx'

/**
 * Side box under the photo: listening tips, further reading, and ways back.
 */
export default function DetailFacts({ family, instrument }) {
  return (
    <div className="detail-facts">
      <ListeningDetails details={instrument.listeningDetails} />
      <FurtherReading resources={instrument.externalResources} />
      <div className="actions">
        <Link className="button" to={`/explore/${family.id}`} aria-label={`Back to ${family.name} instruments`}>
          Back to {family.name.toLowerCase()}
        </Link>
        <Link className="button secondary" to="/explore" aria-label="Return to instrument families selection">
          All families
        </Link>
      </div>
    </div>
  )
}
