import Head from 'next/head'

interface PageHeadProps {
  title: string
}

export default function PageHead(props: PageHeadProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta property={'og:title'} content={'We be buildin'} key={'title'} />
    </Head>
  )
}
