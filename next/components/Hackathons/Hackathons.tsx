import { Heading, SimpleGrid } from '@chakra-ui/react'
import { hacks } from '@/utils/constants/hacks'

import Hackathon from './Hackathon'
import PagePart from '../Common/PagePart'

export default function Hackathons(props: { id: string }) {
  return (
    <PagePart id={props.id}>
      <Heading>Hackathons</Heading>
      <SimpleGrid spacing={12} columns={{ base: 1, md: 3 }}>
        {hacks.map((hack, i) => (
          <Hackathon key={i} hack={hack} />
        ))}
      </SimpleGrid>
    </PagePart>
  )
}
