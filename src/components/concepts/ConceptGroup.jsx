/**
 * One titled group of concept questions and answers on the Music Concepts page.
 */
export default function ConceptGroup({ group }) {
  const headingId = `${group.id}-heading`

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId} className="section-heading">{group.heading}</h2>
      <div className="concept-list">
        {group.concepts.map((concept) => (
          <section key={concept.question}>
            <h3>{concept.question}</h3>
            <p>{concept.answer}</p>
          </section>
        ))}
      </div>
    </section>
  )
}
