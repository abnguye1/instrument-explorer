import ExternalLink from './ExternalLink.jsx'

/**
 * Footer with author credit and image/data sources.
 */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>
          <strong>Instrument History Explorer</strong> · Andrew Nguyen · 2026
        </p>
        <p>
          Images: <ExternalLink href="https://unsplash.com/">Unsplash</ExternalLink>. Data sources:{' '}
          <ExternalLink href="https://music.si.edu/">Smithsonian Music</ExternalLink> and{' '}
          <ExternalLink href="https://www.britannica.com/art/musical-instrument">Encyclopaedia Britannica</ExternalLink>.
        </p>
      </div>
    </footer>
  )
}
