/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    // active tailwind ssr
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'preodemo.gumlet.io',
        protocol: 'https',
      },
    ],
  },
};

module.exports = nextConfig;
