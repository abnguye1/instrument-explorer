import { useAuth } from '../auth/AuthContext.js'
import Breadcrumb from '../components/layout/Breadcrumb.jsx'
import AccountDetails from '../components/account/AccountDetails.jsx'
import PasswordHelp from '../components/account/PasswordHelp.jsx'

/**
 * /account: who is signed in, and how to change the (Google) password.
 */
export default function AccountPage() {
  const { user } = useAuth()

  return (
    <>
      <title>Your Account | Instrument History Explorer</title>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Account' }]} />
      <h1>Your account</h1>
      <p className="flavor-text">
        You&apos;re logged in with Google. Your account details are below, along with how to change your
        password. Use <strong>Log Out</strong> at the top of any page when you&apos;re finished.
      </p>
      <AccountDetails user={user} />
      <PasswordHelp />
    </>
  )
}
