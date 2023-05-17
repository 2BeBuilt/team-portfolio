import Profile from '@/interfaces/profile.dto'

const profiles: Profile[] = [
  {
    name: 'Andrey Gruzdev',
    title: 'Fullstack Developer',
    img: '',
    socials: [
      {
        network: 'sharethis',
        url: 'https://agruz.dev',
        label: 'Portfolio',
      },
      {
        network: 'twitter',
        url: 'https://twitter.com/canvi_eth',
        label: 'Twitter',
      },
      {
        network: 'github',
        url: 'https://github.com/Canvinus',
        label: 'Github',
      },
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/andrey-gruzdev-4643a9236',
        label: 'LinkedIn',
      },
    ],
  },
]

export { profiles }
