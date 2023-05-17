import { HStack, Heading } from '@chakra-ui/react'
import { socials } from '@/utils/constants/socials'

import SocialLogo from '../Common/SocialLogo'
import PagePart from '../Common/PagePart'

export default function Links(props: { id: string }) {
  return (
    <PagePart id={props.id}>
      <Heading>Links</Heading>
      <HStack align={'center'} justify={'center'} spacing={5}>
        {socials.map((social, i) => (
          <SocialLogo
            key={i}
            network={social.network}
            url={social.url}
            label={social.label}
          />
        ))}
      </HStack>
    </PagePart>
  )
}
