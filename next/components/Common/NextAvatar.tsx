import { Flex } from '@chakra-ui/react'

import Image from 'next/image'

export default function NextAvatar(props: {
  src: string
  alt: string
  width: number
  height: number
}) {
  return (
    <Flex>
      <Image
        src={props.src}
        draggable={false}
        width={props.width}
        height={props.height}
        style={{ borderRadius: '50%' }}
        alt={props.alt}
      />
    </Flex>
  )
}
