/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://oakdaletravel.co.uk',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // A retired coach URL permanently redirects to the minibus page and must not appear in the sitemap.
  exclude: [
    '/404',
    '/services/coach-hire-33-seater-small-and-medium-groups',
    // Generic placeholder pages have near-identical content and are noindex.
    '/services/school-transport-services',
    '/services/adult-social-care-transport',
    '/services/contract-transport-services-schools-&-councils',
    '/services/corporate-travel-and-events',
    '/services/sports-team-travel',
    '/services/stag-and-hen-party-transport',
    '/services/holiday-transfers-uk-destinations',
  ],
};
