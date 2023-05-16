import {
  Avatar,
  useDisclosure,
  Box,
  Stack,
  Center,
  Fade,
} from '@chakra-ui/react'

export default function Profile(props: { name: string; img: string }) {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Stack align={'center'} justify={'center'}>
        <Avatar
          size="2xl"
          name={props.name}
          src={props.img}
          onClick={onToggle}
        />
        <Fade in={isOpen}>
          <Box
            maxW={300}
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni
            sapiente quia excepturi iusto aliquam dolorum vel perspiciatis
            perferendis? Veniam soluta, quos rem laboriosam labore impedit sunt
            autem ea recusandae!
          </Box>
        </Fade>
      </Stack>
    </>
  )
}
