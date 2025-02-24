/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Ensures Next.js can generate proper build files
  experimental: {
    appDir: true, // Ensure this is enabled if using Next.js 13+
  },
};

module.exports = nextConfig;
