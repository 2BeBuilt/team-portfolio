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
import { SocialIcon } from 'react-social-icons'

const socials = [
  'https://github.com',
  'https://twitter.com',
  'https://facebook.com',
  'https://instagram.com',
  'https://agruz.dev',
]

export default function Profile(props: { name: string; img: string }) {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Stack align={'center'} justify={'center'} spacing={6}>
        <Avatar
          size={'2xl'}
          name={props.name}
          src={props.img}
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
              {socials.map((social) => (
                <SocialIcon url={social} bgColor={'#cad5e1'} />
              ))}
            </HStack>
          </Stack>
        </Fade>
      </Stack>
    </>
  )
}
