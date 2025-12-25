/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  trailingSlash: false,
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig

