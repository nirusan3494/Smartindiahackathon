/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/Smartindiahackathon',
  assetPrefix: '/Smartindiahackathon/',
}

module.exports = nextConfig
