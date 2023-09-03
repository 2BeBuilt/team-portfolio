import { extendTheme } from '@chakra-ui/react'
import { Press_Start_2P, Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'], display: 'auto' })
const ps2p = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'auto',
})

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'white',
        bg: 'gray.800',
      },
    },
  },
  fonts: {
    heading: ps2p.style.fontFamily,
    body: rubik.style.fontFamily,
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'gray.300',
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.500',
      },
    },
  },
})

export default theme
