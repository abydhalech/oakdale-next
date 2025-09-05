import Head from 'next/head';
import Layout from '../components/Layout';
import Reviews from '../components/Reviews';
import MapBlock from '../components/MapBlock';
import { AREAS, GMB_DESC, phone, email, siteUrl, gmbUrl } from '../components/utils';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  "name": "Oakdale Travel",
  "url": siteUrl,
  "logo": `${siteUrl}/logo.png`,
  "image": `${siteUrl}/og-image.webp`,
  "description": GMB_DESC,
  "telephone": phone,
  "email": email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cambrian Business Park",
    "addressLocality": "Bolton",
    "postalCode": "BL3 6JF",
    "addressCountry": "GB"
  },
  "hasMap": gmbUrl,
  "sameAs": [gmbUrl],
  "areaServed": AREAS,
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "6" },
  "review": [
    { "@type": "Review", "author": { "@type": "Person", "name": "Adnan A" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Brilliant experience. Minibus was clean, comfortable, and driver on time and friendly." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Lee Male" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Good value and good service — will book again." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Ibrahim Dhalech" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Fantastic communication, professionalism 10/10." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Ayesha Athar" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Always punctual and helpful with luggage. Friendly drivers." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Fatima A" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "On time and helpful with luggage despite diversions." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Zayed Amla" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Always on time, reliable and friendly. Highly recommend." }
  ]
};

export default function Home() {
  const towns = [
    'Bolton','Wigan','Manchester','Leigh','Bury','Salford','Rochdale',
    'Warrington','Preston','Liverpool','St Helens','Stockport','Oldham','Blackburn'
  ];

  return (
    <Layout>
      <Head>
        <title>Oakdale Travel — Minibus & coach hire Bolton, Wigan, Manchester</title>
        <meta
          name="description"
          content="Reliable 16-seater minibus hire in Bolton, Wigan, Manchester, Liverpool and across the North West. School transport, airport transfers, weddings, corporate travel and contracts."
        />
        <link rel="canonical" href={siteUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-12 text-black">
        <h1 className="text-3xl font-semibold">Reliable minibus & coach hire in the North West</h1>
        <p className="mt-3">
          We provide transport across Bolton, Wigan, Manchester and beyond.
          Our DBS-checked drivers and modern minibuses ensure safe, punctual and comfortable travel.
        </p>

        {/* Areas */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Areas we cover</h2>
          <p className="mt-3 text-black/80">Choose your local area to find out more about our services nearby:</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {towns.map(town => (
              <div key={town}>
                <a href={`/areas/${town.toLowerCase().replace(/\s+/g,'-')}`} className="underline font-medium">
                  Minibus & coach hire in {town}
                </a>
                <p className="text-black/70 text-sm mt-1">
                  {town === 'Bolton' && 'Serving Bolton School, Toughsheet Stadium and regular transfers to Manchester Airport.'}
                  {town === 'Wigan' && 'Covering Wigan & Leigh College, DW Stadium and transfers to Manchester & Liverpool airports.'}
                  {town === 'Manchester' && 'City centre venues, universities, Old Trafford, Etihad and Manchester Airport connections.'}
                  {town === 'Leigh' && 'Group travel to Leigh Sports Village, local schools and reliable airport shuttles.'}
                  {town === 'Bury' && 'Trips to Bury Market, local schools and frequent Manchester Airport transfers.'}
                  {town === 'Salford' && 'Covering MediaCityUK, University of Salford and Salford Quays events.'}
                  {town === 'Rochdale' && 'School contracts, Hollingworth Lake trips and Manchester Airport transfers.'}
                  {town === 'Warrington' && 'Transport for Gulliver’s World, Halliwell Jones Stadium and business centres.'}
                  {town === 'Preston' && 'Serving UCLan, Deepdale Stadium and reliable airport & event transfers.'}
                  {town === 'Liverpool' && 'Covering Anfield, Goodison Park, universities and stag/hen party transport.'}
                  {town === 'St Helens' && 'Trips to Totally Wicked Stadium, schools and social care travel across Merseyside.'}
                  {town === 'Stockport' && 'Edgeley Park, Stockport Grammar and frequent Manchester Airport transfers.'}
                  {town === 'Oldham' && 'Oldham Athletic match-day hire, school runs and family event transport.'}
                  {town === 'Blackburn' && 'Blackburn Rovers games, local schools and regular airport journeys.'}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Reviews />
        <MapBlock />
      </div>
    </Layout>
  );
}
