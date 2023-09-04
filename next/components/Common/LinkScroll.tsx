import { ReactNode } from 'react'
import { Link } from 'react-scroll'

export default function LinkScroll(props: { to: string; children: ReactNode }) {
  return (
    <Link
      activeClass={'active'}
      to={props.to}
      href={`/#${props.to}`}
      smooth={true}
      spy={true}
      duration={1000}
    >
      {props.children}
    </Link>
  )
}
