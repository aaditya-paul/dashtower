/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  images: {
    domains: [
      "images.unsplash.com",
      "static.ghost.org",
      "cms.upexperiment.com",
    ],
  },
};

module.exports = nextConfig;
