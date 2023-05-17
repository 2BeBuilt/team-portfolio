import { Center, Flex, HStack, Heading } from '@chakra-ui/react'
import { links } from '@/utils/constants/links'

import LinkScroll from '@/components/Common/LinkScroll'

export default function Navbar() {
  return (
    <Center
      userSelect={'none'}
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
      backgroundImage="linear-gradient(to top, gray.700 0%, gray.900 100%)"
    >
      <HStack spacing={{ base: 4, md: 12 }}>
        {links.map((link, i) => (
          <LinkScroll key={i} to={link}>
            <Heading
              py={8}
              zIndex={20}
              textTransform={'capitalize'}
              fontSize={{ base: '2xs', md: 'lg' }}
              cursor={'pointer'}
              _hover={{
                md: {
                  transform: 'translateY(-4px)',
                  fontStyle: 'bold',
                  transitionDuration: '0.2s',
                  transitionTimingFunction: 'ease-in-out',
                },
                base: 'none',
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
