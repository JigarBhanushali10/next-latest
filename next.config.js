/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['**'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.**.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
