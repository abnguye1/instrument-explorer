import { useOutletContext, useParams } from 'react-router'
import Breadcrumb from '../components/layout/Breadcrumb.jsx'
import StepIndicator from './StepIndicator.jsx'
import NotFoundInData from './NotFoundInData.jsx'
import DetailText from './DetailText.jsx'
import DetailFigure from './DetailFigure.jsx'
import DetailFacts from './DetailFacts.jsx'

/**
 * Step 3 (/explore/:familyId/:instrumentId): one instrument's full history.
 * On desktop the CSS grid puts the text on the left and the photo and facts on the right.
 */
export default function InstrumentDetail() {
  const families = useOutletContext()
  const { familyId, instrumentId } = useParams()
  const family = families.find((item) => item.id === familyId)
  const instrument = family?.instruments.find((item) => item.id === instrumentId)

  if (!instrument) {
    return <NotFoundInData what="instrument" />
  }

  return (
    <>
      <title>{`${instrument.name} | Instrument History Explorer`}</title>
      <Breadcrumb
        items={[
          { label: 'Explore', to: '/explore' },
          { label: family.name, to: `/explore/${family.id}` },
          { label: instrument.name },
        ]}
      />
      <StepIndicator activeStep={3} />
      <div className="detail-layout">
        <DetailText instrument={instrument} />
        {instrument.image?.src && <DetailFigure instrument={instrument} />}
        <DetailFacts family={family} instrument={instrument} />
      </div>
    </>
  )
}
