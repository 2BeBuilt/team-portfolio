import { Center, keyframes } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { links } from '@/utils/constants/links'

import * as Scroll from 'react-scroll'

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  5% { transform: scale(4) rotate(0); border-radius: 50%; }
  10% { transform: scale(1) rotate(0); border-radius: 20%; }
`

const animation = `${animationKeyframes} 30s linear infinite`

export default function Footer() {
  const scroller = Scroll.scroller
  return (
    <Center
      position={'fixed'}
      zIndex={10}
      bottom={0}
      w={'full'}
      py={6}
      as={motion.div}
      animation={animation}
    >
      <ChevronDownIcon
        boxSize={6}
        cursor={'pointer'}
        onClick={() =>
          scroller.scrollTo(links[links.length - 1], {
            smooth: true,
          })
        }
      />
    </Center>
  )
}
