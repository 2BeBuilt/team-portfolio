import { HStack, Heading, Stack } from '@chakra-ui/react'
import { socials } from '@/utils/constants/socials'

import SocialLogo from '../Common/SocialLogo'
import Social from '@/interfaces/social.dto'

export default function Links(props: { id: string }) {
  return (
    <Stack
      id={props.id}
      pt={36}
      justify={'center'}
      align={'center'}
      spacing={12}
    >
      <Heading>Links</Heading>
      <HStack align={'center'} justify={'center'} spacing={5}>
        {socials.map((social, i) => (
          <SocialLogo
            key={i}
            network={social.network}
            url={social.url}
            label={social.label}
          />
        ))}
      </HStack>
    </Stack>
  )
}
