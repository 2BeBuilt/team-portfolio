import Hackathon from '@/interfaces/hack.dto'

const hacks: Hackathon[] = [
  {
    name: 'Harvard Blockchain x EasyA Hackathon',
    logo: 'https://pbs.twimg.com/profile_images/1655494003935019008/aHyxX6iG_400x400.jpg',
    date: '31 March - 2 April 2023',
    project: 'Warp Drive',
    prizes: [
      {
        nomination: '"1st Place"',
        sponsor: {
          name: 'Axelar',
          logo: 'https://avatars.githubusercontent.com/u/67522309?s=280&v=4',
        },
      },
    ],
  },
  {
    name: 'ETHGLobal Scaling Ethereum 2023',
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
