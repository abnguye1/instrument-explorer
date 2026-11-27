import { Link } from 'react-router'
import { useAuth } from '../auth/AuthContext.js'
import HeroMedia from '../components/layout/HeroMedia.jsx'
import FamilyPreviewCard from '../components/home/FamilyPreviewCard.jsx'
import homeFamilies from '../data/homeFamilies.js'

/**
 * Public landing page (the only page visible without logging in).
 */
export default function HomePage() {
  const { user } = useAuth()

  return (
    <>
      <title>Home | Instrument History Explorer</title>
      <section className="hero">
        <div>
          <h1>Every instrument has a story.</h1>
          <p>
            Discover how sound, environment, migration, and culture shaped the instruments we hear today.
            Begin with an instrument family, then choose an instrument to uncover its acoustic physics,
            history, and listening techniques.
          </p>
          {!user && (
            <p className="login-note">
              Exploring is free: <Link to="/login">log in with your Google account</Link> to unlock the
              explorer, music concepts, and contact pages.
            </p>
          )}
          <div className="actions">
            <Link className="button" to="/explore">Start Exploring</Link>
            <Link className="button secondary" to="/concepts">Music Concepts</Link>
          </div>
        </div>
        <HeroMedia
          src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1000&q=85"
          alt="Close view of a grand piano keyboard"
          photographer="Geert Pieters"
          photographerUrl="https://unsplash.com/@shotsbywolf"
          photoUrl="https://unsplash.com/photos/a-close-up-of-a-piano-with-a-person-in-the-background-8QrPJ3Kfie4"
        />
      </section>

      <section aria-labelledby="welcome-heading">
        <h2 id="welcome-heading" className="section-heading">Four families to explore</h2>
        <div className="card-grid four">
          {homeFamilies.map((family) => (
            <FamilyPreviewCard key={family.id} family={family} />
          ))}
        </div>
      </section>
    </>
  )
}
