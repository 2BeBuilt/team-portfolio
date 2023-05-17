import { Stack } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function PagePart(props: {
  spacing?: number
  id: string
  children: ReactNode
}) {
  return (
    <Stack
      id={props.id}
      pt={28}
      spacing={props.spacing || 24}
      align={'center'}
      justify={'center'}
      px={4}
    >
      {props.children}
    </Stack>
  )
}
