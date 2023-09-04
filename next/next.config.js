/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'storage.googleapis.com',
      'pbs.twimg.com',
      'avatars.githubusercontent.com',
      'ipfs.io',
    ],
  },
}

module.exports = nextConfig
