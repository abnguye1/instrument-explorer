import { Route, Routes } from 'react-router'
import SiteLayout from './components/layout/SiteLayout.jsx'
import RequireAuth from './auth/RequireAuth.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ConceptsPage from './pages/ConceptsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AccountPage from './pages/AccountPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ExplorerLayout from './explorer/ExplorerLayout.jsx'
import FamiliesStep from './explorer/FamiliesStep.jsx'
import InstrumentsStep from './explorer/InstrumentsStep.jsx'
import InstrumentDetail from './explorer/InstrumentDetail.jsx'

/**
 * All of the app's routes. Every route shares SiteLayout (header + footer)
 * everything inside RequireAuth needs a signed-in user.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />

        <Route element={<RequireAuth />}>
          {/* The explorer's three steps share one data load (ExplorerLayout) */}
          <Route path="explore" element={<ExplorerLayout />}>
            <Route index element={<FamiliesStep />} />
            <Route path=":familyId" element={<InstrumentsStep />} />
            <Route path=":familyId/:instrumentId" element={<InstrumentDetail />} />
          </Route>
          <Route path="concepts" element={<ConceptsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
