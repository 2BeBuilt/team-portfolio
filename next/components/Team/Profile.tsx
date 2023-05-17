import {
  Avatar,
  useDisclosure,
  Box,
  Stack,
  Text,
  Fade,
  HStack,
  Container,
} from '@chakra-ui/react'

import SocialLogo from '../Common/SocialLogo'
import Profile from '@/interfaces/profile.dto'

export default function Profile(props: { profile: Profile }) {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Stack align={'center'} justify={'center'} spacing={6}>
        <Avatar
          size={'2xl'}
          name={props.profile.name}
          src={props.profile.img}
          onClick={onToggle}
          cursor={'pointer'}
        />
        <Fade in={isOpen}>
          <Stack spacing={6}>
            <Text maxW={300}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni
              sapiente quia excepturi iusto aliquam dolorum vel perspiciatis
              perferendis? Veniam soluta, quos rem laboriosam labore impedit
              sunt autem ea recusandae!
            </Text>
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
