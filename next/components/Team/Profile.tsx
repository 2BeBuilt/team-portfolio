import {
  Avatar,
  useDisclosure,
  Box,
  Stack,
  Text,
  Fade,
  HStack,
  Container,
  Heading,
} from '@chakra-ui/react'

import SocialLogo from '../Common/SocialLogo'
import Profile from '@/interfaces/profile.dto'

export default function Profile(props: { profile: Profile }) {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Stack align={'center'} justify={'center'} spacing={6} width={'full'}>
        <Avatar
          size={'2xl'}
          name={props.profile.name}
          src={props.profile.img}
          onClick={onToggle}
          cursor={'pointer'}
        />
        <Stack spacing={0.5}>
          <Heading fontWeight={'light'} fontSize={'sm'}>
            {props.profile.name}
          </Heading>
          <Text fontWeight={'light'} fontSize={'md'}>
            {props.profile.title}
          </Text>
        </Stack>
        <Fade in={isOpen}>
          <Stack spacing={6}>
            <Text maxW={400}>{props.profile.summary}</Text>
            <HStack align={'center'} justify={'center'} spacing={2.5}>
              {props.profile.socials.map((social, i) => (
                <SocialLogo key={i} network={social.network} url={social.url} />
              ))}
            </HStack>
          </Stack>
        </Fade>
      </Stack>
    </>
  )
}
