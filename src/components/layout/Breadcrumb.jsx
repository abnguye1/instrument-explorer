import { Fragment } from 'react'
import { Link } from 'react-router'

/**
 * Breadcrumb trail such as "Home / Explore / Brass". Items with a `to`
 * become links; the last item (the current page) is plain text.
 * @param {{items: Array<{label: string, to?: string}>}} props
 */
export default function Breadcrumb({ items }) {
  return (
    <p className="breadcrumb">
      {items.map((item, index) => (
        <Fragment key={item.label}>
          {index > 0 && ' / '}
          {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
        </Fragment>
      ))}
    </p>
  )
}
