// Instructions: Add image domains configuration to allow external images from same-assets.com

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ext.same-assets.com'],
  },
}

module.exports = nextConfig
