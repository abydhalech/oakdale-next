// components/SEO.js
import Head from 'next/head';
import { siteUrl } from './utils';

export default function SEO({ title, description, canonical, jsonLd }) {
  // ✅ Safe defaults used if a page doesn't pass seoProps
  const t =
    title ||
    'Oakdale Travel — Minibus & coach hire Bolton, Wigan, Manchester';
  const d =
    description ||
    'Reliable 16-seater minibus hire across Bolton, Wigan, Manchester, Liverpool and the North West. School transport, airport transfers, weddings, corporate travel and contracts.';
  const c = canonical || siteUrl;

  return (
    <Head>
      {/* Required for accessibility & SEO */}
      <title>{t}</title>
      <meta name="description" content={d} />
      <link rel="canonical" href={c} />

      {/* Social share basics */}
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:url" content={c} />
      <meta property="og:image" content={`${siteUrl}/og-image.webp`} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Optional structured data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          // Important: stringify to valid JSON, not JS objects
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
