import { Stack, Heading } from '@chakra-ui/react'
import { profiles } from '@/utils/constants/profiles'

import Profile from './Profile'
import PagePart from '../Common/PagePart'

export default function Team(props: { id: string }) {
  return (
    <PagePart id={props.id}>
      <Heading>Team</Heading>
      <Stack spacing={12} direction={{ base: 'column', md: 'row' }}>
        {profiles.map((profile, i) => (
          <Profile key={i} profile={profile} />
        ))}
      </Stack>
    </PagePart>
  )
}
