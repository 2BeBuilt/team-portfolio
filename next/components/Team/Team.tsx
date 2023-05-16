import { Stack, HStack, Heading } from '@chakra-ui/react'

import Profile from './Profile'

export default function Team(props: { id: string }) {
  return (
    <Stack id={props.id} pt={36} spacing={12}>
      <Heading>Team</Heading>
      <HStack spacing={12}>
        <Profile name={'Andrey Gruzdev'} img={''} />
        <Profile name={'Andrey Gruzdev'} img={''} />
      </HStack>
    </Stack>
  )
}
