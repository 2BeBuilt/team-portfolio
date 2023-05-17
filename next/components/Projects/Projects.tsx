import { Stack, Heading, SimpleGrid } from '@chakra-ui/react'

import Project from './Project'

const projects = [
  {
    name: 'Warp Drive',
    description:
      'Embark on a thrilling, cross-chain odyssey that pushes the boundaries of blockchain gaming and showcases the might of the Axelar Network! Prepare to wage war across four distinct blockchains, engaging in relentless combat for power and control in a game that is equal parts immersive, secure, and exhilarating. In this epochal struggle, only one chain shall reign supreme.',
    img: '',
    socials: [
      {
        network: 'twitter',
        url: 'https://twitter.com/easya_app/status/1642623297052618752?s=46&t=wWGh6aBdBOA2phlNMj_ZFQ',
        label: 'EasyA',
      },
      {
        network: 'github',
        url: 'https://github.com/Canvinus/warp-drive',
        label: 'Github',
      },
      {
        network: 'sharethis',
        url: 'https://wdrive.io',
        label: 'MVP',
      },
    ],
  },
  {
    name: 'TimePact',
    description:
      'TimePact allows users to create secure time capsules containing specific data, with an expiration date, that can be unlocked using special NFTs. These NFTs can be easily transferred between accounts and bridged to other blockchains. TimePact was originally created at ETHGlobal 2023 Scaling Ethereum and uses the first version of Enode as a security layer.',
    img: '',
    socials: [
      {
        network: 'sharethis',
        url: 'https://ethglobal.com/showcase/timepact-1mof1',
        label: 'ETHGlobal',
      },
      {
        network: 'github',
        url: 'https://github.com/Canvinus/TimePact',
        label: 'Github',
      },
      {
        network: 'sharethis',
        url: 'https://timepact.xyz',
        label: 'MVP',
      },
    ],
  },
]

export default function Projects(props: { id: string }) {
  return (
    <Stack
      id={props.id}
      pt={36}
      spacing={12}
      align={'center'}
      justify={'center'}
    >
      <Heading>Projects</Heading>
      <SimpleGrid spacing={12} columns={{ base: 1, md: 3 }}>
        {projects.map((project, i) => (
          <Project
            key={i}
            name={project.name}
            description={project.description}
            img={project.description}
            socials={project.socials}
          />
        ))}
      </SimpleGrid>
    </Stack>
  )
}
