/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slavsenkiv-nextjs-foodies-users-images.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = {
  images: {
    domains: ['slavsenkiv-nextjs-foodies-users-images.s3.amazonaws.com'],
  },
};