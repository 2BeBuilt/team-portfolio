import { Box, Flex, Avatar, Stack, Heading, Text } from '@chakra-ui/react'

import Hackathon from '@/interfaces/hack.dto'

export default function Hackathon(props: { hack: Hackathon }) {
  return (
    <Box
      rounded={'lg'}
      overflow={'hidden'}
      userSelect={'none'}
      justifyContent={'start'}
    >
      <Flex justify={'center'} align={'center'} mb={5}>
        <Avatar src={props.hack.logo} boxSize={44} draggable={false} />
      </Flex>
      <Stack spacing={3} justify={'center'} align={'center'}>
        <Heading fontSize={'md'} maxW={400}>
          {props.hack.name}
        </Heading>
        <Text>{props.hack.date}</Text>
        <Heading fontSize={'sm'}>{props.hack.project}</Heading>
        <Stack spacing={10} justify={'center'} align={'center'}>
          {props.hack.prizes.map((prize, i) => (
            <Stack key={i} spacing={3} justify={'center'} align={'center'}>
              <Heading fontSize={'2xs'}>{prize.sponsor.name}</Heading>
              <Avatar src={prize.sponsor.logo} size={'md'} />
              <Text>{prize.nomination}</Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}
