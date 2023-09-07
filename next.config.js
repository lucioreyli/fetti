/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['@tauri-apps/api'],
  experimental: { serverActions: true },
};

module.exports = nextConfig;
