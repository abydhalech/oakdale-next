/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://oakdaletravel.co.uk',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // A retired coach URL permanently redirects to the minibus page and must not appear in the sitemap.
  exclude: ['/404', '/services/coach-hire-33-seater-small-and-medium-groups'],
};
