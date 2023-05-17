import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  HStack,
  Avatar,
} from '@chakra-ui/react'

import SocialLogo from '../Common/SocialLogo'
import Project from '@/interfaces/project.dto'

export default function Project(props: { project: Project }) {
  return (
    <Box
      rounded={'lg'}
      overflow={'hidden'}
      userSelect={'none'}
      pt={10}
      justifyContent={'start'}
    >
      <Flex justify={'center'} align={'center'} mb={5}>
        <Avatar src={props.project.img} boxSize={44} draggable={false} />
      </Flex>
      <Stack spacing={5} justify={'center'} align={'center'}>
        <Heading>{props.project.name}</Heading>
        <Text maxW={400}>{props.project.description}</Text>
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
  )
}
