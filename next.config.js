/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Keep @react-pdf/renderer out of the webpack bundle — it needs Node APIs at runtime.
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  },
};

module.exports = nextConfig;
