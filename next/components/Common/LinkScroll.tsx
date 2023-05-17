import { Link } from 'react-scroll'
import { Container, Flex } from '@chakra-ui/react'
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
