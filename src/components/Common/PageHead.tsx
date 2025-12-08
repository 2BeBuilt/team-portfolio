import Head from 'next/head'

interface PageHeadProps {
  title: string
}

export default function PageHead(props: PageHeadProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta property="og:title" content="We be buildin" key="title" />
      <meta name="description" content="2BeBuilt - we be buildin" />
      <meta name="apple-mobile-web-app-title" content="2bb" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/icon0.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  )
}
