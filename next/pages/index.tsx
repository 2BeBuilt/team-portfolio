import { Center, HStack, Heading, Stack, Text } from '@chakra-ui/react'

import PageHead from '@/components/Common/PageHead'
import Navbar from '@/components/Layout/Navbar'
import About from '@/components/About/About'
import Team from '@/components/Team/Team'
import Projects from '@/components/Projects/Projects'

export default function Home() {
  return (
    <>
      <PageHead title={'2BeBuilt'} />
      <Center textAlign={'center'} pb={1000}>
        <Stack spacing={'100px'}>
          <About id={'about'} />
          <Team id={'team'} />
          <Projects id={'projects'} />
        </Stack>
      </Center>
    </>
  )
}
