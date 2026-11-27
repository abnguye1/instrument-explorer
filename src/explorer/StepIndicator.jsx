const STEP_TITLES = ['Family', 'Instrument', 'Details']

/**
 * "1 Family · 2 Instrument · 3 Details" progress list. The current step is
 * marked with aria-current="step" and a "Step N:" prefix.
 * @param {{activeStep: 1|2|3}} props
 */
export default function StepIndicator({ activeStep }) {
  return (
    <nav className="step-progress" aria-label="Exploration progress">
      <ol className="step-list">
        {STEP_TITLES.map((title, index) => {
          const number = index + 1
          const isActive = number === activeStep
          const status = isActive ? 'active' : number < activeStep ? 'completed' : 'upcoming'

          return (
            <li key={title} className={`step-item ${status}`} aria-current={isActive ? 'step' : undefined}>
              <span className="step-badge">{number}</span>
              <span>{isActive ? `Step ${number}: ${title}` : title}</span>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
