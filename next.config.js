/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["picsum.photos", "drive.google.com, images.unsplash.com"],
    // formats: ["image/avif", "image/webp"],
  },

  sassOptions: {
    additionalData: `@import "src/styles/variables.scss"; @import "src/styles/mixins.scss";`,
  },
};

module.exports = nextConfig;
