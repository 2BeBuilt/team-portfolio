import Hackathon from '@/interfaces/hack.dto'

const hacks: Hackathon[] = [
  {
    name: 'ETHGlobal Paris 2023',
    logo: 'https://storage.googleapis.com/ethglobal-api-production/events%2Fzqd1s%2Flogo%2F1683191744558_paris_2023_square_logo.png',
    date: 'July 21 – 23, 2023',
    project: 'SourceScan.BOS',
    prizes: [
      {
        nomination: '"🥈 Best Frontend built with BOS"',
        sponsor: {
          name: 'NEAR',
          logo: 'https://storage.googleapis.com/ethglobal-api-production/organizations%2F5b69q%2Flogo%2F1666293405537_YPwdd6cd_400x400.jpeg',
        },
      },
    ],
  },
  {
    name: 'Harvard Blockchain x EasyA Hackathon',
    logo: 'https://ipfs.io/ipfs/bafkreign4u2iurpsdrjehbvsar7fl6ofbb3p4x5r7olswnqpo3se3vsukm',
    date: '31 March - 2 April 2023',
    project: 'Warp Drive',
    prizes: [
      {
        nomination: '"🥇 1st Place"',
        sponsor: {
          name: 'Axelar',
          logo: 'https://avatars.githubusercontent.com/u/67522309?s=280&v=4',
        },
      },
    ],
  },
  {
    name: 'ETHGlobal Scaling Ethereum 2023',
    logo: 'https://storage.googleapis.com/ethglobal-api-production/events%2Fof2r2%2Flogo%2F1671503482706_scaling-ethereum-square-logo.svg',
    date: '10 - 31 March 2023',
    project: 'TimePact',
    prizes: [
      {
        nomination: '"Best Primitives or Infra"',
        sponsor: {
          name: 'FVM',
          logo: 'https://storage.googleapis.com/ethglobal-api-production/organizations%2F9zj01%2Flogo%2F1677081097389_FVM%20square%20logo.png',
        },
      },
      {
        nomination: '"Just Deploy!"',
        sponsor: {
          name: 'Scroll',
          logo: 'https://storage.googleapis.com/ethglobal-api-production/organizations%2Fyip67%2Fimages%2FETH%20Tokyo%202023%20_logo_400_400%402x.png',
        },
      },
    ],
  },
]

export { hacks }
