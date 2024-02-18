import Project from '@/interfaces/project.dto'

const projects: Project[] = [
  {
    name: 'buildr.build',
    description: `buildr.build is the directory for everyone passionate about web3. Treat it as accessible to everyone personal advertising platform where you can promote yourself or others, share contact info, and find necessary contacts of other builders.`,
    img: 'https://ipfs.io/ipfs/QmSrVetxXm8MbzKbnFiSGpYuYYsVhZm7VS5wDwNUAiEjCg',
    socials: [
      {
        network: 'sharethis',
        url: 'https://buildr.build',
        label: 'Site',
      },
      {
        network: 'twitter',
        url: 'https://twitter.com/i/communities/1758601184183456077',
        label: 'Community',
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
    description: `SourceScan is a platform for the NEAR blockchain, enhancing smart contract source code verification, viewing, and deployment. It focuses on WebAssembly (WASM) challenges, improving contract interoperability, security, and transparency. It aims to support NEAR's ecosystem by simplifying smart contract development, ensuring security, and boosting user adoption.`,
    img: 'https://ipfs.io/ipfs/bafkreihbwe3aj2pnzoy6vaqbalps53xvq7xsqrip2t2jyt37zkj3nj4uhm',
    backers: [
      {
        name: 'NEAR DevHub',
        logo: 'https://ipfs.io/ipfs/bafkreihdmhkx7lxgeua4zp6klt3lrg2igmsvtb2bmzocne5nksfcflgjwy',
      },
    ],
    socials: [
      {
        network: 'github',
        url: 'https://github.com/sourcescan',
        label: 'Github',
      },
      {
        network: 'sharethis',
        url: 'https://near.org/devgovgigs.near/widget/gigs-board.pages.Post?id=1565',
        label: 'Proposal',
      },
      {
        network: 'sharethis',
        url: 'https://sourcescan.dev',
        label: 'SourceScan',
      },
      {
        network: 'sharethis',
        url: 'https://near.org/sourcescan.near/widget/SourceScan',
        label: 'BOS',
      },
    ],
    screenshots: [],
  },
  {
    name: 'Enode',
    description:
      'Enode is an universal encryption node for IPFS that can be used for securing private data on any public blockchain. Enode v1.1 is an improved version of original Enode that was created during ETHGlobal 2023 Scaling Ethereum. This version became more secure by using sign in with ethereum to ensure that data will not be exposed to the third party. Also, supports both encryption of files and json data.',
    img: 'https://ipfs.io/ipfs/bafybeihinzsksfetvdi33gkgf37j2ikz2wpcfkj2vwnwyqzj5ckbrjqmzu/enode_logo.png',
    socials: [
      {
        network: 'sharethis',
        url: 'https://enode.2bb.dev',
        label: 'MVP',
      },
    ],
    screenshots: [],
  },
  {
    name: 'Unirecord',
    description:
      'Universal health record system that allows patients to store their medical data in a secure and private way. Patients can share their data with doctors and other healthcare providers, and can also choose to monetize their data by sharing it with researchers. Based on Enode v1.1.',
    img: 'https://ipfs.io/ipfs/bafybeicvynfurxtned3guedd6yhtgoakrrafjysabqavmvqp6x4vmiotbi/logo.png',
    socials: [
      {
        network: 'sharethis',
        url: 'https://unirecord.2bb.dev',
        label: 'MVP',
      },
    ],
    screenshots: [],
  },
  {
    name: 'Warp Drive',
    description:
      'Embark on a thrilling, cross-chain odyssey that pushes the boundaries of blockchain gaming and showcases the might of the Axelar Network! Prepare to wage war across four distinct blockchains, engaging in relentless combat for power and control in a game that is equal parts immersive, secure, and exhilarating. In this epochal struggle, only one chain shall reign supreme.',
    img: 'https://ipfs.io/ipfs/bafybeicarh33j5ubiqs36biynoy4a6azbmigngmorxjbgmdii6fv7kuvvm/wd_logo.png',
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
      'TimePact allows users to create secure time capsules containing specific data, with an expiration date, that can be unlocked using special NFTs. These NFTs can be easily transferred between accounts and bridged to other blockchains. TimePact was originally created at ETHGlobal 2023 Scaling Ethereum and uses the first version of Enode as a security layer.',
    img: 'https://ipfs.io/ipfs/bafybeic6zf5ni4xbx4zrnzzayrexvalsohyhpbs4lwe3tzymcenmfbrqiu/tp_logo.png',
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
