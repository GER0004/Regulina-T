/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true, // включаем поддержку директории /app
  },
  output: 'standalone', // чтобы Vercel собирал правильно
};

module.exports = nextConfig;
