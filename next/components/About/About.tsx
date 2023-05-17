import { Stack, Heading, Text, Center } from '@chakra-ui/react'

export default function About(props: { id: string }) {
  return (
    <Stack id={props.id} pt={36} align={'center'} justify={'center'}>
      <Heading>2BeBuilt</Heading>
      <Stack spacing={12}>
        <Text>"We be buildin"</Text>
        <Stack spacing={3} textAlign={'center'} px={2}>
          <Text maxW={600}>
            Our team's journey began unexpectedly at a hackathon, where a
            diverse group of individuals with a shared passion for changing the
            world came together. Fueled by our collective desire to make a
            difference, we are driven to create groundbreaking projects that
            will serve as the driving force behind the future of the web3 space.
          </Text>
          <Text maxW={600}>
            While the web3 and blockchain industry is still relatively young, we
            firmly believe in its immense potential for growth and
            transformation. Reflecting on history, it is fascinating to consider
            that just a century ago, the idea of horse-keeping as a thriving
            business seemed unassailable. Yet today, cars have become an
            integral part of our lives, altering our perception of
            transportation completely. Similarly, we view the current state of
            blockchain technology as analogous to the early days of
            automobiles—a revolutionary concept with unlimited possibilities.
          </Text>
          <Text maxW={600}>
            In this era of unprecedented technological advancement, the
            potential of blockchain is truly awe-inspiring, defying conventional
            bounds of what was previously deemed possible. As the 2BeBuilt team,
            we aspire to be an integral part of shaping this remarkable web3
            future. Our mission is not only to contribute to its evolution but
            also to create a future that is as beautiful as it is
            groundbreaking.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
