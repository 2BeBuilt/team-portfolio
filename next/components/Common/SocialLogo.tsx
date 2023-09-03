import { Center, Tooltip } from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons'

export default function SocialLogo(props: {
  network: string
  url: string
  label?: string
}) {
  return (
    <Tooltip label={props.label} rounded={'lg'}>
      <Center zIndex={20}>
        <SocialIcon
          url={props.url}
          bgColor={'#cad5e1'}
          target={'_blank'}
          network={props.network}
          style={{ width: 40, height: 40 }}
        />
      </Center>
    </Tooltip>
  )
}
