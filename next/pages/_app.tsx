import dynamic from 'next/dynamic'

const ChakraProvider = dynamic(() =>
  import('@chakra-ui/react').then((mod) => mod.ChakraProvider)
)

import type { AppProps } from 'next/app'

import Layout from '@/components/Layout/Layout'
import Fonts from '@/utils/fonts'
import theme from '@/utils/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
