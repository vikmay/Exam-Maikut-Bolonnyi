/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'franke-lux.com.ua',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
