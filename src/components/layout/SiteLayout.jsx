import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import SiteHeader from './SiteHeader.jsx'
import SiteFooter from './SiteFooter.jsx'

/**
 * Shared frame for every route: header, the current page (<Outlet />),
 * a "Return to top" button, and the footer.
 */
export default function SiteLayout() {
  const { pathname } = useLocation()

  // A new route should start at the top of the page, like a normal page load
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <div className="page-shell">
          <Outlet />
        </div>
      </main>
      <p className="return-top">
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Return to top
        </button>
      </p>
      <SiteFooter />
    </>
  )
}
