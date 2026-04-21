/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    turbopack: {
      root: __dirname,
    },
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
