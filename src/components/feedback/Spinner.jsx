/**
 * Animated loading circle (styled in index.css). Decorative only: the text
 * next to it tells screen reader users what is happening.
 */
export default function Spinner({ large = false }) {
  return <span className={large ? 'spinner large' : 'spinner'} aria-hidden="true" />
}
