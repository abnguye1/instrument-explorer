import { Link, NavLink } from 'react-router'
import AccountNav from './AccountNav.jsx'

/**
 * Site banner and primary navigation. NavLink marks the current page with
 * aria-current="page", which the CSS underlines in gold.
 */
export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/">Instrument History Explorer</Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <NavLink to="/explore">Explore</NavLink>
          <NavLink to="/concepts">Music Concepts</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <AccountNav />
        </nav>
      </div>
    </header>
  )
}
