import {
  Box,
  Center,
  Flex,
  Image,
  Stack,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react'

import SocialLogo from '../Common/SocialLogo'

export default function Project(props: {
  name: string
  description: string
  img: string
  socials: { network: string; url: string; label: string }[]
}) {
  return (
    <Center>
      <Box rounded={'lg'} overflow={'hidden'} userSelect={'none'} pt={10}>
        <Flex justify={'center'} align={'center'} mb={5}>
          <Image src={props.img} rounded={'lg'} draggable={false} />
        </Flex>
        <Box p={6}>
          <Stack spacing={5}>
            <Heading>{props.name}</Heading>
            <Text>{props.description}</Text>
            <HStack align={'center'} justify={'center'}>
              {props.socials.map((social, i) => (
                <SocialLogo
                  key={i}
                  url={social.url}
                  network={social.network}
                  label={social.label}
                />
              ))}
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Center>
  )
}
