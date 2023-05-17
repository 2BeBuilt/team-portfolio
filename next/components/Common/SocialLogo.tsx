import { SocialIcon } from 'react-social-icons'
import { Center, Tooltip } from '@chakra-ui/react'

export default function SocialLogo(props: {
  network: string
  url: string
  label?: string
}) {
  return (
    <Tooltip label={props.label} rounded={'lg'}>
      <Center>
        <SocialIcon
          url={props.url}
          bgColor={'#cad5e1'}
          target={'_blank'}
          network={props.network}
        />
      </Center>
    </Tooltip>
  )
}