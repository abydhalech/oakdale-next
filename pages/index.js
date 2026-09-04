import Link from 'next/link';
import QuickQuote from '../components/QuickQuote';
import Layout from '../components/Layout';
import Reviews from '../components/Reviews';
import MapBlock from '../components/MapBlock';
import { AREAS, phone, email, siteUrl, gmbUrl } from '../components/utils';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteUrl,
  name: 'Oakdale Travel',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.webp`,
  description:
    'Oakdale Travel provides 16-seater minibus hire with a driver across Bolton, Wigan, Manchester and the wider North West for airport transfers, schools, events, weddings, group travel and contract transport.',
  telephone: phone,
  email: email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cambrian Business Park',
    addressLocality: 'Bolton',
    postalCode: 'BL3 6JF',
    addressCountry: 'GB',
  },
  hasMap: gmbUrl,
  sameAs: [gmbUrl],
  areaServed: AREAS,
};

export default function Home() {
  const title =
    '16-Seater Minibus Hire Bolton, Wigan & Manchester | Oakdale Travel';

  const description =
    '16-seater minibus hire with a driver across Bolton, Wigan, Manchester and the North West. Airport transfers, schools, events, weddings and group travel.';

  const towns = [
    'Bolton',
    'Wigan',
    'Manchester',
    'Leigh',
    'Bury',
    'Salford',
    'Rochdale',
    'Warrington',
    'Preston',
    'Liverpool',
    'St Helens',
    'Stockport',
    'Oldham',
    'Blackburn',
  ];

  return (
    <Layout
      seoProps={{
        title,
        description,
        canonical: siteUrl,
        jsonLd,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 text-black">

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            16-Seater Minibus Hire With Driver Across Bolton, Wigan & Manchester
          </h1>

          <p className="mt-5 text-lg leading-8 text-black/80">
            Oakdale Travel provides reliable 16-seater minibus hire with a
            driver for groups across Bolton, Wigan, Manchester and the wider
            North West.
          </p>

          <p className="mt-4 leading-7 text-black/80">
            We provide transport for airport transfers, weddings, sporting
            events, concerts, school journeys, contract transport, family
            occasions and group travel across the UK.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded font-semibold"
            >
              Get a Quote
            </Link>

            <Link
              href="/services/minibus-hire-16-seater"
              className="border border-black px-6 py-3 rounded font-semibold"
            >
              View 16-Seater Minibus Hire
            </Link>
          </div>
        </section>

        <QuickQuote />

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Minibus Hire for Airports, Events, Schools & Groups
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-black/80">
            Our driver-operated minibus service is suitable for private and
            contract journeys. Whether you need transport to Manchester
            Airport, a wedding, football match, concert, school or another UK
            destination, we can provide a quotation based on your journey
            requirements.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold">
                16-Seater Minibus Hire
              </h3>

              <p className="mt-2 text-black/70">
                Group transport for up to 16 passengers with a driver.
              </p>

              <p className="mt-3">
                <Link
                  href="/services/minibus-hire-16-seater"
                  className="underline font-medium"
                >
                  View 16-seater hire
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold">
                Minibus With Driver
              </h3>

              <p className="mt-2 text-black/70">
                Pre-booked driver-operated minibus transport for private and
                group journeys.
              </p>

              <p className="mt-3">
                <Link
                  href="/services/minibus-with-driver-hire"
                  className="underline font-medium"
                >
                  Minibus hire with driver
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold">
                Group Airport Transfers
              </h3>

              <p className="mt-2 text-black/70">
                Group travel to Manchester, Liverpool and Leeds Bradford
                airports.
              </p>

              <p className="mt-3">
                <Link
                  href="/services/airport-transfers-manchester,-liverpool,-leeds-bradford"
                  className="underline font-medium"
                >
                  View airport transfers
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold">
                School & Contract Transport
              </h3>

              <p className="mt-2 text-black/70">
                Regular minibus transport for schools, organisations and
                contract requirements.
              </p>

              <p className="mt-3">
                <Link
                  href="/services/school-transport-services"
                  className="underline font-medium"
                >
                  View school transport
                </Link>
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Minibus Hire Areas
          </h2>

          <p className="mt-3 text-black/80">
            Choose your local area to find out more about our minibus hire
            services nearby:
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {towns.map((town) => (
              <div key={town}>
                <Link
                  href={`/areas/${town.toLowerCase().replace(/\s+/g, '-')}`}
                  className="underline font-medium"
                >
                  Minibus hire in {town}
                </Link>

                <p className="text-black/70 text-sm mt-1">
                  {town === 'Bolton' &&
                    'Serving Bolton, local schools, events and regular group transfers to Manchester Airport.'}

                  {town === 'Wigan' &&
                    'Group minibus hire across Wigan for airports, events, schools and private journeys.'}

                  {town === 'Manchester' &&
                    'Minibus transport for Manchester city centre, events, football, airports and group travel.'}

                  {town === 'Leigh' &&
                    'Group travel across Leigh for local events, schools, airports and private journeys.'}

                  {town === 'Bury' &&
                    'Minibus hire across Bury for airport journeys, schools, events and group travel.'}

                  {town === 'Salford' &&
                    'Group transport across Salford including MediaCity, events, universities and airport journeys.'}

                  {town === 'Rochdale' &&
                    'Minibus transport across Rochdale for schools, airport transfers, events and private groups.'}

                  {town === 'Warrington' &&
                    'Group minibus hire across Warrington for events, airports and private transport.'}

                  {town === 'Preston' &&
                    'Minibus transport across Preston for events, airports, schools and group journeys.'}

                  {town === 'Liverpool' &&
                    'Group minibus hire for Liverpool events, football, airports, nights out and private travel.'}

                  {town === 'St Helens' &&
                    'Minibus transport across St Helens for events, schools, airports and group travel.'}

                  {town === 'Stockport' &&
                    'Group minibus hire across Stockport for Manchester Airport, events and private journeys.'}

                  {town === 'Oldham' &&
                    'Minibus transport across Oldham for airport transfers, events, schools and family travel.'}

                  {town === 'Blackburn' &&
                    'Group minibus hire across Blackburn for events, airports, schools and private journeys.'}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Minibus Hire in Bolton, Wigan & Manchester
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-black/80">
            Bolton is our home base, with transport provided across Greater
            Manchester and the wider North West. Our key local service areas
            include Bolton, Wigan and Manchester, with group transport
            available for local journeys and longer-distance UK travel.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/areas/bolton"
              className="underline font-semibold"
            >
              Minibus Hire Bolton
            </Link>

            <Link
              href="/areas/wigan"
              className="underline font-semibold"
            >
              Minibus Hire Wigan
            </Link>

            <Link
              href="/areas/manchester"
              className="underline font-semibold"
            >
              Minibus Hire Manchester
            </Link>
          </div>
        </section>

        <Reviews />
        <MapBlock />

      </div>
    </Layout>
  );
}
