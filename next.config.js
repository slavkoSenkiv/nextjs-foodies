/** @type {import('next').NextConfig} */
import s3name from './sensitiveData'

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${s3name}.s3.amazonaws.com`,
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
