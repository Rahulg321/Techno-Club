/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com/**',
      },
    ],
  },
};

module.exports = nextConfig;
