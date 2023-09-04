import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'

import Hackathon from '@/interfaces/hack.dto'
import NextAvatar from '../Common/NextAvatar'

export default function Hackathon(props: { hack: Hackathon }) {
  return (
    <Box
      rounded={'lg'}
      overflow={'hidden'}
      userSelect={'none'}
      justifyContent={'start'}
    >
      <Flex justify={'center'} align={'center'} mb={5}>
        <NextAvatar
          src={props.hack.logo}
          alt={`${props.hack.name}-logo`}
          width={176}
          height={176}
        />
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
              <NextAvatar
                src={prize.sponsor.logo}
                alt={`${prize.sponsor.name}-logo`}
                width={48}
                height={48}
              />
              <Text>{prize.nomination}</Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}
