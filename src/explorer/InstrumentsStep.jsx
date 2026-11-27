import { Link, useOutletContext, useParams } from 'react-router'
import Breadcrumb from '../components/layout/Breadcrumb.jsx'
import StepIndicator from './StepIndicator.jsx'
import ChoiceCard from './ChoiceCard.jsx'
import NotFoundInData from './NotFoundInData.jsx'

/**
 * Step 2 (/explore/:familyId): choose an instrument within a family.
 */
export default function InstrumentsStep() {
  const families = useOutletContext()
  const { familyId } = useParams()
  const family = families.find((item) => item.id === familyId)

  if (!family) {
    return <NotFoundInData what="instrument family" />
  }

  return (
    <>
      <title>{`${family.name} | Instrument History Explorer`}</title>
      <Breadcrumb items={[{ label: 'Explore', to: '/explore' }, { label: family.name }]} />
      <StepIndicator activeStep={2} />
      <h1>{family.name}: choose an instrument</h1>
      <p className="flavor-text">{family.overview || family.shortDescription}</p>
      <div className="card-grid four">
        {family.instruments.map((instrument) => (
          <ChoiceCard
            key={instrument.id}
            to={`/explore/${family.id}/${instrument.id}`}
            name={instrument.name}
            image={instrument.image}
            fallbackAlt={instrument.name}
            description={instrument.summary}
            linkLabel={`View history and details of the ${instrument.name}`}
          />
        ))}
      </div>
      <div className="stepper-actions">
        <Link className="button secondary" to="/explore">← Back to all families</Link>
      </div>
    </>
  )
}
