/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://oakdaletravel.co.uk',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Keep live service pages discoverable; only exclude the 404 page.
  exclude: ['/404'],
};
