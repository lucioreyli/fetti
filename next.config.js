/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['@tauri-apps/api'],
};

module.exports = nextConfig;

