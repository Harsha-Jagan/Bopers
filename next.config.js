/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ddragon.leagueoflegends.com',
            port: '',
            pathname: '/cdn/img/champion/splash/**',
          },
        ],
      },
}

module.exports = nextConfig
