import ExternalLink from './ExternalLink.jsx'

/**
 * Tilted hero photo with an Unsplash credit line.
 * @param {{src: string, alt: string, photographer: string, photographerUrl: string, photoUrl: string}} props
 */
export default function HeroMedia({ src, alt, photographer, photographerUrl, photoUrl }) {
  return (
    <figure className="hero-media">
      <img src={src} alt={alt} />
      <figcaption>
        Photo by <cite><ExternalLink href={photographerUrl}>{photographer}</ExternalLink></cite> on{' '}
        <ExternalLink href={photoUrl}>Unsplash</ExternalLink>.
      </figcaption>
    </figure>
  )
}
