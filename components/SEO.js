import Head from 'next/head';
import { siteUrl } from './utils';

export default function SEO({
  title,
  description,
  canonical,
  jsonLd,
}) {
  const t =
    title ||
    '16-Seater Minibus Hire | Bolton, Wigan & Manchester | Oakdale Travel';

  const d =
    description ||
    '16-seater minibus hire with a driver across Bolton, Wigan, Manchester and the North West for private groups, events, weddings, days out, airport transfers and contract transport.';

  const c = canonical || siteUrl;

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      <title>{t}</title>

      <meta
        name="description"
        content={d}
      />

      <link
        rel="canonical"
        href={c}
      />

      <meta
        property="og:title"
        content={t}
      />

      <meta
        property="og:description"
        content={d}
      />

      <meta
        property="og:url"
        content={c}
      />

      <meta
        property="og:image"
        content={`${siteUrl}/og-image.webp`}
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      )}
    </Head>
  );
}
