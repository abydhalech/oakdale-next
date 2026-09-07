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
    'Oakdale Travel provides 16-seater minibus hire with a driver across Bolton, Wigan, Manchester and the wider North West for weddings, race days, concerts, sporting events, family travel, day trips, nights out, airport transfers and contract transport.',
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
    '16-seater minibus hire with a driver across Bolton, Wigan, Manchester and the North West for weddings, race days, concerts, sporting events, day trips, nights out and group travel.';

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
            Oakdale Travel provides 16-seater minibus hire with a driver for
            groups across Bolton, Wigan, Manchester and the wider North West.
          </p>

          <p className="mt-4 leading-7 text-black/80">
            We provide private group transport for weddings, race days,
            concerts and festivals, sporting events, family occasions, day
            trips, nights out and longer-distance journeys across the UK.
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
            16-Seater Minibus Hire & Driver Services
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-black/80">
            Our main service is private 16-seater minibus hire with a driver.
            We provide pre-booked transport for groups travelling locally
            across the North West and to destinations throughout the UK.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold">
                16-Seater Minibus Hire
              </h3>

              <p className="mt-2 text-black/70">
                Private group transport for up to 16 passengers with a driver.
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
                Driver-operated minibus transport for private groups and
                pre-booked journeys.
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

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Private Minibus Hire for Events & Group Travel
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-black/80">
            Planning a day or evening out with family or friends? We provide
            private minibus hire with a driver for some of the most popular
            group occasions across Bolton, Wigan, Manchester and the wider
            North West.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold">
                Wedding Minibus Hire
              </h3>

              <p className="mt-2 text-black/70">
                Guest transport between homes, hotels, wedding venues,
                ceremonies and receptions.
              </p>

              <p className="mt-3">
                <Link
                  href="/services/wedding-transport-hire"
                  className="underline font-medium"
                >
                  Wedding minibus hire
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold">
                Race Day Minibus Hire
              </h3>

              <p className="mt-2 text-black/70">
                Group transport to Haydock, Aintree, York, Chester and other
                racecourses across the UK.
              </p>

              <p className="mt-3">
                <Link
                  href="/services/race-day-minibus-hire"
                  className="underline font-medium"
                >
                  Race day minibus hire
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold">
                Concert & Festival Minibus Hire
              </h3>

              <p className="mt-2 text-black/70">
                Private group transport for concerts, festivals and major
                entertainment events.
              </p>

              <p className="mt-3">
                <Link
                  href="/services/concert-festival-event-minibus-hire"
                  className="underline font-medium"
                >
                  Concert & festival transport
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold">
                Match Day & Sporting Events
              </h3>

              <p className="mt-2 text-black/70">
                Minibus transport for supporters travelling to football,
                rugby and other sporting events.
              </p>

              <p className="mt-3">
                <Link
                  href="/services/sporting-event-match-day-minibus-hire"
                  className="underline font-medium"
                >
                  Sporting event minibus hire
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold">
                Family & Group Private Hire
              </h3>

              <p className="mt-2 text-black/70">
                Private minibus transport for birthdays, family gatherings,
                celebrations and group occasions.
              </p>

              <p className="mt-3">
                <Link
                  href="/services/private-hire-for-family-events"
                  className="underline font-medium"
                >
                  Family & group private hire
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold">
                Day Trip Minibus Hire
              </h3>

              <p className="mt-2 text-black/70">
                Group transport for seaside trips, attractions, sightseeing
                and days out across the UK.
              </p>

              <p className="mt-3">
                <Link
                  href="/services/day-trips-and-excursions"
                  className="underline font-medium"
                >
                  Day trip minibus hire
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold">
                Group Nights Out
              </h3>

              <p className="mt-2 text-black/70">
                Private transport for restaurants, birthdays, bars,
                celebrations and evenings out.
              </p>

              <p className="mt-3">
                <Link
                  href="/services/group-nights-out-transport"
                  className="underline font-medium"
                >
                  Group nights out minibus hire
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
                    'Serving Bolton for weddings, events, race days, family travel, airport transfers and private group journeys.'}

                  {town === 'Wigan' &&
                    'Group minibus hire across Wigan for events, weddings, days out, airports and private journeys.'}

                  {town === 'Manchester' &&
                    'Minibus transport for Manchester events, football, concerts, nights out, airports and group travel.'}

                  {town === 'Leigh' &&
                    'Group travel across Leigh for local events, airports, family occasions and private journeys.'}

                  {town === 'Bury' &&
                    'Minibus hire across Bury for events, airport journeys, family travel and private groups.'}

                  {town === 'Salford' &&
                    'Group transport across Salford for events, MediaCity, nights out, universities and airport journeys.'}

                  {town === 'Rochdale' &&
                    'Minibus transport across Rochdale for events, airport transfers, days out and private groups.'}

                  {town === 'Warrington' &&
                    'Group minibus hire across Warrington for events, airports, days out and private transport.'}

                  {town === 'Preston' &&
                    'Minibus transport across Preston for events, airports, private hire and group journeys.'}

                  {town === 'Liverpool' &&
                    'Group minibus hire for Liverpool events, football, concerts, nights out, airports and private travel.'}

                  {town === 'St Helens' &&
                    'Minibus transport across St Helens for events, family occasions, airports and group travel.'}

                  {town === 'Stockport' &&
                    'Group minibus hire across Stockport for Manchester Airport, events, nights out and private journeys.'}

                  {town === 'Oldham' &&
                    'Minibus transport across Oldham for airport transfers, events, family occasions and private travel.'}

                  {town === 'Blackburn' &&
                    'Group minibus hire across Blackburn for events, airports, days out and private journeys.'}
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
