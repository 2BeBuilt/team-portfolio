import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/utils/theme'
import Fonts from '@/utils/fonts'
import Layout from '@/components/Layout/Layout'

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
