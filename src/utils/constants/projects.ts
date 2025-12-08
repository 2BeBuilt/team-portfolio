import Project from '@/interfaces/project.dto'

const projects: Project[] = [
  {
    name: 'BitMind',
    description: `Deepfake detection platform on Bittensor blockchain with consumer-facing apps for detecting AI-generated media.`,
    img: '/images/projects/bitmind.png',
    socials: [
      {
        network: 'sharethis',
        url: 'https://bitmind.ai',
        label: 'BitMind',
      },
    ],
    screenshots: [],
  },
  {
    name: 'NEP-330: Source Metadata',
    description: `NEAR standard for contract source metadata, enabling source code verification for deployed smart contracts.`,
    img: '/images/projects/near.png',
    socials: [
      {
        network: 'github',
        url: 'https://github.com/near/neps',
        label: 'Github',
      },
    ],
    screenshots: [],
  },
  {
    name: 'buildr.build',
    description: `Web3 builder directory and networking platform for promoting yourself, sharing contact info, and connecting with other builders.`,
    img: '/images/projects/buildr.png',
    socials: [
      {
        network: 'sharethis',
        url: 'https://buildr.build',
        label: 'buildr.build',
      },
      {
        network: 'sharethis',
        url: 'https://opensea.io/collection/buildr-build',
        label: 'OpenSea',
      },
    ],
    screenshots: [],
  },
  {
    name: 'SourceScan',
    description: `NEAR's contract verification backbone, integrated into NEARBlocks and near-cli-rs.`,
    img: '/images/projects/sourcescan.png',
    backers: [
      {
        name: 'NEAR DevHub',
        logo: 'https://ipfs.io/ipfs/bafkreihdmhkx7lxgeua4zp6klt3lrg2igmsvtb2bmzocne5nksfcflgjwy',
      },
    ],
    socials: [
      {
        network: 'github',
        url: 'https://github.com/SourceScan',
        label: 'Github',
      },
      {
        network: 'sharethis',
        url: 'https://nearblocks.io',
        label: 'NEARBlocks',
      },
      {
        network: 'github',
        url: 'https://github.com/near/near-cli-rs',
        label: 'near-cli-rs',
      },
      {
        network: 'github',
        url: 'https://github.com/near/cargo-near',
        label: 'cargo-near',
      },
    ],
    screenshots: [],
  },
  {
    name: 'Warp Drive',
    description:
      'Cross-chain strategy game built on Axelar Network where players battle across four blockchains for control and dominance.',
    img: '/images/projects/warpdrive.png',
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
    screenshots: [],
  },
  {
    name: 'TimePact',
    description:
      'Secure time capsule platform where users lock data with expiration dates, unlockable via transferable NFTs that can be bridged across blockchains.',
    img: '/images/projects/timepact.png',
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
    screenshots: [],
  },
]

export { projects }
