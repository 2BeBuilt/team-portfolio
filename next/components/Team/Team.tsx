import { Stack, Heading } from '@chakra-ui/react'

import Profile from './Profile'

export default function Team(props: { id: string }) {
  return (
    <Stack
      id={props.id}
      pt={36}
      spacing={12}
      align={'center'}
      justify={'center'}
    >
      <Heading>Team</Heading>
      <Stack spacing={12} direction={{ base: 'column', md: 'row' }}>
        <Profile name={'Andrey Gruzdev'} img={''} />
        <Profile name={'Andrey Gruzdev'} img={''} />
      </Stack>
    </Stack>
  )
}
