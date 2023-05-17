import {
  Center,
  Box,
  Flex,
  Avatar,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react'

import Hackathon from '@/interfaces/hack.dto'

export default function Hackathon(props: { hack: Hackathon }) {
  return (
    <Box
      rounded={'lg'}
      overflow={'hidden'}
      userSelect={'none'}
      pt={10}
      justifyContent={'start'}
    >
      <Flex justify={'center'} align={'center'} mb={5}>
        <Avatar src={props.hack.logo} boxSize={44} draggable={false} />
      </Flex>
      <Stack spacing={5} justify={'center'} align={'center'}>
        <Stack>
          <Heading fontSize={'md'} maxW={400}>
            {props.hack.name}
          </Heading>
          <Text>{props.hack.date}</Text>
        </Stack>
        <Heading fontSize={'md'}>{props.hack.project}</Heading>
        <Stack spacing={12}>
          {props.hack.prizes.map((prize) => (
            <Stack spacing={5} justify={'center'} align={'center'}>
              <Stack>
                <Heading fontSize={'2xs'}>{prize.sponsor.name}</Heading>
                <Avatar src={prize.sponsor.logo} />
              </Stack>
              <Text>{prize.nomination}</Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}
