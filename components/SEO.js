import Head from 'next/head';

export default function SEO({
  title,
  description,
  url = 'https://oakdaletravel.co.uk',
  image = '/og-image.webp',
  canonical,
  jsonLd,
  noindex = false,
  hreflang = 'en-GB'
}) {
  const pageUrl = canonical || url;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex,follow' : 'index,follow'} />
      <link rel="canonical" href={pageUrl} />
      <link rel="alternate" hrefLang={hreflang} href={pageUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />


      {jsonLd && (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />)}
    </Head>
  );
}
