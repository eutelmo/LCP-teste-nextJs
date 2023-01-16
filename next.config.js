/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        protocol: "https",
        hostname: "example.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
