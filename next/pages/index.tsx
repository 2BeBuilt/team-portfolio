import { Center, Stack } from '@chakra-ui/react'

import PageHead from '@/components/Common/PageHead'
import About from '@/components/About/About'
import Team from '@/components/Team/Team'
import Projects from '@/components/Projects/Projects'
import Hackathons from '@/components/Hackathons/Hackathons'
import Links from '@/components/Links/Links'

export default function Home() {
  return (
    <>
      <PageHead title={'2BeBuilt'} />
      <Center textAlign={'center'} pb={1000} userSelect={'none'}>
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
