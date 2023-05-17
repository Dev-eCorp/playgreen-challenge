/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "www.dominio2.com", "www.google.com"],
  },
};

module.exports = nextConfig;
