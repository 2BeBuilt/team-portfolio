import { Box, Flex, HStack, Heading, Stack, Text } from '@chakra-ui/react'

import Project from '@/interfaces/project.dto'
import NextAvatar from '../Common/NextAvatar'
import SocialLogo from '../Common/SocialLogo'

export default function Project(props: { project: Project }) {
  return (
    <Box
      rounded={'lg'}
      overflow={'hidden'}
      userSelect={'none'}
      justifyContent={'start'}
    >
      <Flex justify={'center'} align={'center'} mb={5}>
        <NextAvatar
          src={props.project.img}
          alt={`${props.project.name}-logo`}
          width={176}
          height={176}
        />
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
        {props.project.backers ? (
          <Stack spacing={10}>
            <Heading fontSize={'md'}>Backers</Heading>
            {props.project.backers.map((backer, i) => (
              <Stack
                key={i}
                spacing={3}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Heading fontSize={'2xs'}>{backer.name}</Heading>
                <NextAvatar
                  src={backer.logo}
                  alt={`${backer.name}-logo`}
                  width={48}
                  height={48}
                />
              </Stack>
            ))}
          </Stack>
        ) : null}
      </Stack>
    </Box>
  )
}
