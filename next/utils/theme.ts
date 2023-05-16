import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'PS2P',
    body: 'Rubik',
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
