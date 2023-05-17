import {
  Avatar,
  useDisclosure,
  Stack,
  Text,
  HStack,
  Heading,
} from '@chakra-ui/react'

import SocialLogo from '../Common/SocialLogo'
import Profile from '@/interfaces/profile.dto'

export default function Profile(props: { profile: Profile }) {
  return (
    <Stack align={'center'} justify={'start'} spacing={6} width={'full'}>
      <Avatar
        boxSize={44}
        name={props.profile.name}
        src={props.profile.img}
        draggable={false}
      />
      <Stack spacing={0.5}>
        <Heading fontWeight={'light'} fontSize={'sm'}>
          {props.profile.name}
        </Heading>
        <Text fontWeight={'light'} fontSize={'md'}>
          {props.profile.title}
        </Text>
      </Stack>
      <Stack spacing={6} px={2}>
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
