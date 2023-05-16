import { Center, Flex, HStack, Heading } from '@chakra-ui/react'
import { links } from '@/utils/links'

import LinkScroll from '@/components/Common/LinkScroll'

export default function Navbar() {
  return (
    <Center
      px={24}
      textAlign={'center'}
      position={'fixed'}
      top={0}
      zIndex={10}
      w={'full'}
      opacity={0.8}
      style={{
        backdropFilter: 'blur(10px) contrast(200%)',
      }}
      rounded={'lg'}
      backgroundImage="linear-gradient(to top, gray.700 0%, gray.900 100%)"
    >
      <HStack spacing={12}>
        {links.map((link) => (
          <LinkScroll to={link}>
            <Heading
              py={8}
              zIndex={20}
              textTransform={'capitalize'}
              fontSize={'xl'}
              _hover={{
                transform: 'translateY(-4px)',
                fontStyle: 'bold',
                transitionDuration: '0.2s',
                transitionTimingFunction: 'ease-in-out',
              }}
            >
              {link}
            </Heading>
          </LinkScroll>
        ))}
      </HStack>
    </Center>
  )
}
