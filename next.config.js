/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
}

module.exports = nextConfig

