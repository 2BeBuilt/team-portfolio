import { Stack, Heading } from '@chakra-ui/react'
import { profiles } from '@/utils/constants/profiles'

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
        {profiles.map((profile, i) => (
          <Profile key={i} profile={profile} />
        ))}
      </Stack>
    </Stack>
  )
}
