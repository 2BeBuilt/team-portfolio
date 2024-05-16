import { Heading, Stack, Text, keyframes } from '@chakra-ui/react'

import PagePart from '../Common/PagePart'
import LyricsDrawer from '../Drawer/LyricsDrawer'

export default function About(props: { id: string }) {
  const transitionContent = keyframes`
  0% { content: '2BeBuilt'; color: white; }
  20% { content: '2BeBuil'; color: gray; }
  40% { content: '2BeBui'; color: white; }
  60% { content: '2BeBu'; color: gray; }
  80% { content: '2BeB'; color: white; }
  100% { content: '2BB'; color: white; }
`
  return (
    <PagePart id={props.id} spacing={12}>
      <Stack spacing={1}>
        <LyricsDrawer>
          <Heading
            _before={{
              content: '"2BeBuilt"',
              animation: `${transitionContent} 5s forwards`,
              display: 'inline-block',
            }}
          ></Heading>
        </LyricsDrawer>
        <Text>"We be buildin"</Text>
      </Stack>
      <Stack spacing={12}>
        <Stack spacing={3} textAlign={'center'}>
          <Text maxW={600}>
            Our team's journey began unexpectedly at a hackathon, where a
            diverse group of individuals with a shared passion for changing the
            world came together. Fueled by our collective desire to make a
            difference, we are driven to create groundbreaking projects that
            will serve as the driving force behind the future of the web3 space.
            <br />
            <br />
            While the web3 and blockchain industry is still relatively young, we
            firmly believe in its immense potential for growth and
            transformation. Reflecting on history, it is fascinating to consider
            that just a century ago, the idea of horse-keeping as a thriving
            business seemed unassailable. Yet today, cars have become an
            integral part of our lives, altering our perception of
            transportation completely. Similarly, we view the current state of
            blockchain technology as analogous to the early days of
            automobiles—a revolutionary concept with unlimited possibilities.
            <br />
            <br />
            In this era of unprecedented technological advancement, the
            potential of blockchain is truly awe-inspiring, defying conventional
            bounds of what was previously deemed possible. As the 2BeBuilt team,
            we aspire to be an integral part of shaping this remarkable web3
            future. Our mission is not only to contribute to its evolution but
            also to create a future that is as beautiful as it is
            groundbreaking.
          </Text>
        </Stack>
      </Stack>
    </PagePart>
  )
}
