import { Center, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import { hacks } from '@/utils/constants/hacks'

import Hackathon from './Hackathon'

export default function Hackathons(props: { id: string }) {
  return (
    <Stack
      id={props.id}
      pt={36}
      spacing={12}
      align={'center'}
      justify={'center'}
      pl={2}
      pr={2}
    >
      <Heading>Hackathons</Heading>
      <SimpleGrid spacing={12} columns={{ base: 1, md: 3 }}>
        {hacks.map((hack, i) => (
          <Hackathon key={i} hack={hack} />
        ))}
      </SimpleGrid>
    </Stack>
  )
}
