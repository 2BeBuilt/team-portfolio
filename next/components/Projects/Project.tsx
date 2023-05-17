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
import Project from '@/interfaces/project.dto'

export default function Project(props: { project: Project }) {
  return (
    <Center>
      <Box rounded={'lg'} overflow={'hidden'} userSelect={'none'} pt={10}>
        <Flex justify={'center'} align={'center'} mb={5}>
          <Image src={props.project.img} rounded={'lg'} draggable={false} />
        </Flex>
        <Box p={6}>
          <Stack spacing={5}>
            <Heading>{props.project.name}</Heading>
            <Text>{props.project.description}</Text>
            <HStack align={'center'} justify={'center'}>
              {props.project.socials.map((social, i) => (
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
