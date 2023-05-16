import { Stack, HStack, Heading } from '@chakra-ui/react'

export default function Projects(props: { id: string }) {
  return (
    <Stack id={props.id} pt={36} spacing={12}>
      <Heading>Projects</Heading>
      <HStack spacing={12}></HStack>
    </Stack>
  )
}
