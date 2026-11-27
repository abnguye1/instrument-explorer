/**
 * Link to another website, opened in a new tab safely
 * (noopener/noreferrer stop the new page from controlling this one).
 * `ref` is passed through so a parent can move focus to the link.
 */
export default function ExternalLink({ href, children, ref }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" ref={ref}>
      {children}
    </a>
  )
}
