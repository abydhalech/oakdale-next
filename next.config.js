/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: { domains: ['images.unsplash.com'] },
  async headers() {
    return [
      // Cache Next.js static files
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Cache public assets (images, icons, webmanifest)
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|ico|gif|avif|xml|webmanifest)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
