/**
 * The instrument photo and its photographer credit.
 */
export default function DetailFigure({ instrument }) {
  const { image } = instrument

  return (
    <figure className="detail-image">
      <img src={image.src} alt={image.alt || `Photograph of ${instrument.name}`} />
      {image.caption && (
        // Captions hold the photographer credit links, so they are stored as HTML in
        // the database. Only the project owner can edit that data (see database rules).
        <figcaption dangerouslySetInnerHTML={{ __html: image.caption }} />
      )}
    </figure>
  )
}
