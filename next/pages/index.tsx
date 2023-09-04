import { Center, Stack } from '@chakra-ui/react'

import PageHead from '@/components/Common/PageHead'

import dynamic from 'next/dynamic'

const About = dynamic(() => import('@/components/About/About'))
const Hackathons = dynamic(() => import('@/components/Hackathons/Hackathons'))
const Links = dynamic(() => import('@/components/Links/Links'))
const Projects = dynamic(() => import('@/components/Projects/Projects'))
const Team = dynamic(() => import('@/components/Team/Team'))

export default function Home() {
  return (
    <>
      <PageHead title={'2BeBuilt'} />
      <Center textAlign={'center'} pb={100} userSelect={'none'}>
        <Stack spacing={'100px'}>
          <About id={'about'} />
          <Team id={'team'} />
          <Projects id={'projs'} />
          <Hackathons id={'hacks'} />
          <Links id={'links'} />
        </Stack>
      </Center>
    </>
  )
}
