import Head from 'next/head'

interface PageHeadProps {
  title: string
}

export default function PageHead(props: PageHeadProps) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>{props.title}</title>
      <meta property={'og:title'} content={'We be buildin'} key={'title'} />
      <meta name={'description'} content={'2BeBuilt - we be buildin'} />
    </Head>
  )
}
