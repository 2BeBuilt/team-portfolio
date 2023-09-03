import { Center, Stack } from '@chakra-ui/react'

import About from '@/components/About/About'
import PageHead from '@/components/Common/PageHead'
import Hackathons from '@/components/Hackathons/Hackathons'
import Links from '@/components/Links/Links'
import Projects from '@/components/Projects/Projects'
import Team from '@/components/Team/Team'

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
