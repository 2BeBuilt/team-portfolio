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
      justifyContent={'start'}
    >
      <Flex justify={'center'} align={'center'} mb={5}>
        <Avatar src={props.project.img} boxSize={44} draggable={false} />
      </Flex>
      <Stack spacing={6} justify={'center'} align={'center'}>
        <Heading fontSize={'md'}>{props.project.name}</Heading>
        <Text maxW={400}>{props.project.description}</Text>
        <HStack align={'center'} justify={'center'} spacing={4}>
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
