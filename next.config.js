const withNextIntl = require('next-intl/plugin')('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    // Configure proper handling of vendor chunks
    optimizePackageImports: ['framer-motion'],
  },
  webpack: (config) => {
    // Ensure framer-motion is properly bundled
    config.resolve.alias = {
      ...config.resolve.alias,
      '@vendor-chunks/framer-motion': 'framer-motion',
    };
    return config;
  },
};

module.exports = withNextIntl(nextConfig);