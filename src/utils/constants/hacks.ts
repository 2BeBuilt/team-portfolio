import Hackathon from '@/interfaces/hack.dto'

const hacks: Hackathon[] = [
  {
    name: 'ETHGlobal Paris 2023',
    logo: '/ethglobal-paris-2023.png',
    date: 'July 21 – 23, 2023',
    project: 'SourceScan.BOS',
    prizes: [
      {
        nomination: '"🥈 Best Frontend built with BOS"',
        sponsor: {
          name: 'NEAR',
          logo: '/near-logo.jpeg',
        },
      },
    ],
  },
  {
    name: 'Harvard Blockchain x EasyA Hackathon',
    logo: '/harvard-blockchain.jpg',
    date: '31 March - 2 April 2023',
    project: 'Warp Drive',
    prizes: [
      {
        nomination: '"🥇 1st Place"',
        sponsor: {
          name: 'Axelar',
          logo: '/axelar-logo.jpg',
        },
      },
    ],
  },
  {
    name: 'ETHGlobal Scaling Ethereum 2023',
    logo: '/ethglobal-scaling-ethereum-2023.svg',
    date: '10 - 31 March 2023',
    project: 'TimePact',
    prizes: [
      {
        nomination: '"Best Primitives or Infra"',
        sponsor: {
          name: 'FVM',
          logo: '/fvm-logo.png',
        },
      },
      {
        nomination: '"Just Deploy!"',
        sponsor: {
          name: 'Scroll',
          logo: '/scroll-logo.png',
        },
      },
    ],
  },
]

export { hacks }
