/**
 * A label paired with its form control (passed as children).
 */
export default function FormField({ id, label, children }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {children}
    </>
  )
}
