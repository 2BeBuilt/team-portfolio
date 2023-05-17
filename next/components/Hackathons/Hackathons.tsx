import { Center, Heading } from '@chakra-ui/react'

export default function Hackathons(props: { id: string }) {
  return (
    <Center id={props.id} pt={36}>
      <Heading>Hackathons</Heading>
    </Center>
  )
}
