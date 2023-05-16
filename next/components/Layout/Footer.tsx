import { Center } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import * as Scroll from 'react-scroll'

export default function Footer() {
  const scroller = Scroll.scroller

  return (
    <Center position={'fixed'} bottom={0} w={'full'} py={6}>
      <ChevronDownIcon
        boxSize={6}
        cursor={'pointer'}
        onClick={() =>
          scroller.scrollTo('team', {
            smooth: true,
          })
        }
      />
    </Center>
  )
}
