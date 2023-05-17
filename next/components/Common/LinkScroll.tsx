import { Link } from 'react-scroll'
import { ReactNode } from 'react'

export default function LinkScroll(props: { to: string; children: ReactNode }) {
  return (
    <Link
      activeClass={'active'}
      to={props.to}
      smooth={true}
      spy={true}
      duration={1000}
    >
      {props.children}
    </Link>
  )
}
