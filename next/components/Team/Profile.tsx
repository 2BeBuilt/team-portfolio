import { HStack, Heading, Stack, Text } from '@chakra-ui/react'

import Profile from '@/interfaces/profile.dto'
import NextAvatar from '../Common/NextAvatar'
import SocialLogo from '../Common/SocialLogo'

export default function Profile(props: { profile: Profile }) {
  return (
    <Stack align={'center'} justify={'start'} spacing={6} width={'full'}>
      <NextAvatar
        src={props.profile.img}
        alt={`${props.profile.name}-avatar`}
        width={176}
        height={176}
      />
      <Stack spacing={0.5}>
        <Heading fontWeight={'light'} fontSize={'sm'}>
          {props.profile.name}
        </Heading>
        <Text fontWeight={'light'} fontSize={'md'}>
          {props.profile.title}
        </Text>
      </Stack>
      <Stack spacing={6}>
        <Text maxW={400}>{props.profile.summary}</Text>
        <HStack align={'center'} justify={'center'} spacing={2.5}>
          {props.profile.socials.map((social, i) => (
            <SocialLogo
              key={i}
              network={social.network}
              url={social.url}
              label={social.label}
            />
          ))}
        </HStack>
      </Stack>
    </Stack>
  )
}
