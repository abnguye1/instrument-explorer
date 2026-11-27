import Breadcrumb from '../components/layout/Breadcrumb.jsx'
import HeroMedia from '../components/layout/HeroMedia.jsx'
import ConceptGroup from '../components/concepts/ConceptGroup.jsx'
import { conceptGroups, cultureParagraphs } from '../data/concepts.js'

/**
 * Music Concepts: background reading on acoustics, classification, and culture.
 */
export default function ConceptsPage() {
  return (
    <>
      <title>Music Concepts | Instrument History Explorer</title>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Music Concepts' }]} />
      <section className="hero">
        <div>
          <h1>There&apos;s a lot to music.</h1>
          <p>
            Music brings together sound, art, memories, and people. These notes explain foundational
            concepts about acoustics, classification, and cultural exchange that you can use to listen,
            analyze, and understand instruments and music itself.
          </p>
        </div>
        <HeroMedia
          src="https://images.unsplash.com/photo-1488630228244-bcdf33562a43?q=80&w=1632&auto=format&fit=crop"
          alt="Black and white picture of an orchestra playing on stage in front of a large audience"
          photographer="Arindam Mahanta"
          photographerUrl="https://unsplash.com/@arindam_mahanta"
          photoUrl="https://unsplash.com/photos/grayscale-photography-of-orchestra-playing-on-theatre-VEOk8qUl9DU"
        />
      </section>

      {conceptGroups.map((group) => (
        <ConceptGroup key={group.id} group={group} />
      ))}

      <section aria-labelledby="culture-heading">
        <h2 id="culture-heading" className="section-heading">Music, Migration, and Culture</h2>
        {cultureParagraphs.map((text) => (
          <p key={text.slice(0, 40)}>{text}</p>
        ))}
      </section>
    </>
  )
}
