import { useOutletContext } from 'react-router'
import Breadcrumb from '../components/layout/Breadcrumb.jsx'
import StepIndicator from './StepIndicator.jsx'
import ChoiceCard from './ChoiceCard.jsx'

/**
 * Step 1 (/explore): choose an instrument family.
 */
export default function FamiliesStep() {
  const families = useOutletContext()

  return (
    <>
      <title>Explore | Instrument History Explorer</title>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Explore' }]} />
      <StepIndicator activeStep={1} />
      <h1>Choose an instrument family</h1>
      <p className="flavor-text">
        Each family groups instruments by the way its sound is produced. Select a card to see 4
        instruments in that family and explore their history.
      </p>
      <div className="card-grid four">
        {families.map((family) => (
          <ChoiceCard
            key={family.id}
            to={`/explore/${family.id}`}
            name={family.name}
            image={family.image}
            fallbackAlt={`${family.name} family`}
            description={family.shortDescription}
            linkLabel={`Explore ${family.name} family`}
          />
        ))}
      </div>
    </>
  )
}
