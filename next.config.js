/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/frontend_next" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/frontend_next" : "",
  trailingSlash: true,
}

module.exports = nextConfig
