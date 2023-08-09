/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
      styledComponents: true,
    },

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
