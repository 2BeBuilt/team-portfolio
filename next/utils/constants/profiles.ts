import Profile from '@/interfaces/profile.dto'

const profiles: Profile[] = [
  {
    name: 'Andrey Gruzdev',
    title: 'Fullstack Developer',
    summary:
      'I am committed to immersing myself in the web3 space to make it a better place for the end-user. By working on projects that create a more decentralized and equitable internet, I strive to contribute to a better world. With my skills, experience, and drive to make a difference, I am confident that I can make a valuable contribution to any team or project.',
    img: 'https://ipfs.io/ipfs/QmaqAFD2BqxT6n8Yk2QUUTDyYuAFGbNtAQaxYxPqu4yy6S',
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
        url: 'https://www.linkedin.com/in/canvi',
        label: 'LinkedIn',
      },
    ],
  },
  {
    name: 'Alexey Zenin',
    title: 'Solidity Developer',
    summary:
      'Rocket scientist mutated into a sophisticated web3 degen buildr. Now only motto is: "Build it fast, build it right, keep me building. Blockchain solutions tinkerer, solidity padawan."',
    img: 'https://ipfs.io/ipfs/bafybeie3mfvmfe2a2vsyuafbipf5en5crhhqmq3t5hkt62lfp7hu3vkoxy/alexthebuildr.png',
    socials: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/alexey-zenin/',
        label: 'LinkedIn',
      },
      {
        network: 'twitter',
        url: 'https://twitter.com/itsalexey',
        label: 'Twitter',
      },
      {
        network: 'github',
        url: 'https://github.com/ztsalexey',
        label: 'github',
      },
    ],
  },
]

export { profiles }
