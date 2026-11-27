/**
 * Name, email, and sign-in method of the signed-in user.
 */
export default function AccountDetails({ user }) {
  return (
    <section className="auth-panel" aria-labelledby="details-heading">
      <h2 id="details-heading">Account details</h2>
      <dl className="account-details">
        <dt>Name</dt>
        <dd>{user.displayName || 'Not provided'}</dd>
        <dt>Email</dt>
        <dd>{user.email}</dd>
        <dt>Sign-in method</dt>
        <dd>Google</dd>
      </dl>
    </section>
  )
}
