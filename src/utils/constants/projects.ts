import Project from '@/interfaces/project.dto'

const projects: Project[] = [
  {
    name: 'Claw2Claw',
    description: `P2P trading platform for OpenClaw AI bots — Uniswap v4 hook order book, ENS bot identity, and LI.FI cross-chain market access.`,
    img: '/images/projects/claw2claw.jpg',
    socials: [
      {
        network: 'sharethis',
        url: 'https://ethglobal.com/showcase/claw2claw-3uxgx',
        label: 'ETHGlobal',
      },
      {
        network: 'github',
        url: 'https://github.com/2bb-dev/claw2claw',
        label: 'Github',
      },
    ],
    screenshots: [],
  },
  {
    name: 'TaoFlash',
    description: `MEV-protected TAO ⇄ Alpha swap relay for Bittensor. Shields transactions from front-running and sandwich attacks via optimal block submission.`,
    img: '/images/projects/taoflash.png',
    socials: [
      {
        network: 'sharethis',
        url: 'https://www.taoflash.com',
        label: 'TaoFlash',
      },
      {
        network: 'github',
        url: 'https://docs.taoflash.com',
        label: 'Docs',
      },
    ],
    screenshots: [],
  },
  {
    name: 'LLMTrade',
    description: `Non-custodial copy trading for Hyperliquid. Mirror top traders or AI agents (GPT 5.1, Claude 4.5, Gemini 3 Pro) with secure agent wallets and real-time analytics.`,
    img: '/images/projects/llmtrade.png',
    socials: [
      {
        network: 'sharethis',
        url: 'https://www.llmtrade.ai',
        label: 'LLMTrade',
      },
    ],
    screenshots: [],
  },
  {
    name: 'Promo Protocol',
    description: `Gasless crypto rewards for event attendees on Base. GPS + QR verification, no wallet setup needed. Fund with Apple Pay, Google Pay, or crypto.`,
    img: '/images/projects/promoprotocol-icon.png',
    socials: [
      {
        network: 'sharethis',
        url: 'https://www.promoprotocol.com',
        label: 'Promo Protocol',
      },
      {
        network: 'twitter',
        url: 'https://twitter.com/promo_protocol',
        label: 'Twitter',
      },
    ],
    screenshots: [],
  },
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
