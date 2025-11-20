// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  images: {
    unoptimized: true, // required for static export with Next.js Image
  },
};

module.exports = nextConfig;
