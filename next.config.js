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
      // Cache image assets; never cache sitemap.xml or robots.txt as immutable.
      // Search engines need to see sitemap changes after each deployment.
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|ico|gif|avif|webmanifest)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
