import { Link } from 'react-router'

/**
 * Home page card that links straight to a family's instruments (Step 2).
 */
export default function FamilyPreviewCard({ family }) {
  return (
    <article className="card">
      <h3>{family.name}</h3>
      <p>{family.blurb}</p>
      <Link className="button button-full" to={`/explore/${family.id}`}>
        Explore {family.name}
      </Link>
    </article>
  )
}
