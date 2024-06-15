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
        protocol: process.env.S3_PROTOCOL,
        hostname: process.env.S3_HOSTNAME,
        port: process.env.S3_PORT,
        pathname: process.env.S3_PATHNAME,
      },
    ],
  },
};

module.exports = nextConfig;
