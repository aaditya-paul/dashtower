/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "static.ghost.org",
      "cms.upexperiment.com",
    ],
  },
};

module.exports = nextConfig;
