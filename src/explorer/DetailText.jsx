/**
 * Paragraphs from a list of strings (keyed by position, since the text is static).
 */
function Paragraphs({ texts = [] }) {
  return texts.map((text, index) => <p key={index}>{text}</p>)
}

/**
 * The main reading column: name, introduction, how it makes sound, and history.
 */
export default function DetailText({ instrument }) {
  return (
    <div className="detail-copy">
      <h1>{instrument.name}</h1>
      <Paragraphs texts={instrument.intro} />
      <h2>How it makes sound</h2>
      <Paragraphs texts={instrument.soundMechanism} />
      <h2>History and development</h2>
      <Paragraphs texts={instrument.history} />
    </div>
  )
}
