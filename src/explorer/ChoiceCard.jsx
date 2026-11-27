import { Link } from 'react-router'

/**
 * Card for a family or instrument choice. Both the photo and the title link
 * to the next step; the photo link is hidden from keyboards and screen
 * readers so they only meet one link per card.
 */
export default function ChoiceCard({ to, name, image, fallbackAlt, description, linkLabel }) {
  return (
    <article className="card">
      {image?.src && (
        <Link to={to} className="card-media" tabIndex={-1} aria-hidden="true">
          <img src={image.src} alt={image.alt || fallbackAlt} loading="lazy" />
        </Link>
      )}
      <h2>
        <Link to={to} aria-label={linkLabel}>{name}</Link>
      </h2>
      <p>{description}</p>
    </article>
  )
}
