/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['images.unsplash.com', 'static.ghost.org'],
  },
};

module.exports = nextConfig;
