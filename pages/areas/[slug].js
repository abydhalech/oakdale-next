import Link from 'next/link';
import Layout from '../../components/Layout';
import BoltonAreaPage from '../../components/BoltonAreaPage';
import WiganAreaPage from '../../components/WiganAreaPage';
import ManchesterAreaPage from '../../components/ManchesterAreaPage';
import { AREAS, siteUrl } from '../../components/utils';

const toSlug = (s) => s.toLowerCase().replace(/\s+/g, '-');

const UNIQUE = {
  Leigh:
    'We provide pre-booked minibus hire across Leigh for airport journeys, events, school and contract transport, family occasions and group travel. Local journeys can include Leigh Sports Village as well as longer-distance travel across Greater Manchester and the UK.',

  Bury:
    'Our Bury minibus service is suitable for airport transfers, school journeys, events, family occasions and private group travel. Collections can be arranged across Bury and surrounding areas for both local and longer-distance journeys.',

  Salford:
    'We provide minibus hire across Salford for group travel to locations such as Salford Quays, MediaCity, events, universities, airports and destinations across Greater Manchester and the UK.',

  Rochdale:
    'Our Rochdale minibus hire service covers private groups, airport transfers, school and contract journeys, events and days out. Collections can be arranged across Rochdale and surrounding areas.',

  Warrington:
    'We provide group minibus transport across Warrington for airport journeys, sporting events, family occasions, schools, business travel and private hire. Local and longer-distance journeys can both be arranged.',

  Preston:
    'Our Preston minibus hire service is available for airport transfers, sporting events, university travel, schools, family occasions and private group journeys across the North West and further afield.',

  Liverpool:
    'We provide minibus hire in Liverpool for airport journeys, football matches, events, nights out, family occasions and other private group travel. Outward and return journeys can be arranged in advance.',

  'St Helens':
    'Our St Helens minibus service is suitable for airport journeys, sporting events, schools, family travel and private groups, with transport available across Merseyside and destinations further afield.',

  Stockport:
    'We provide minibus hire across Stockport for Manchester Airport transfers, sporting events, school journeys, family occasions and private group travel across Greater Manchester and the UK.',

  Oldham:
    'Our Oldham minibus hire service covers airport transfers, sporting events, school and contract journeys, family occasions and private group travel across Greater Manchester and beyond.',

  Blackburn:
    'We provide minibus hire across Blackburn for airport journeys, football and sporting events, schools, family occasions and private group travel across Lancashire and the wider North West.',
};

export async function getStaticPaths() {
  return {
    paths: AREAS.map((area) => ({
      params: {
        slug: toSlug(area),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const area = AREAS.find((area) => toSlug(area) === params.slug);

  return {
    props: {
      area,
    },
  };
}

export default function AreaPage({ area }) {
  if (area === 'Bolton') {
    return <BoltonAreaPage />;
  }

  if (area === 'Wigan') {
    return <WiganAreaPage />;
  }

  if (area === 'Manchester') {
    return <ManchesterAreaPage />;
  }

  const slug = toSlug(area);

  const title =
    `Minibus Hire ${area} | 16-Seater With Driver | Oakdale Travel`;

  const description =
    `16-seater minibus hire in ${area} with a driver for airport transfers, events, schools, family journeys and group travel across the North West.`;

  const canonical = `${siteUrl}/areas/${slug}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#minibus-hire`,
      name: `Minibus Hire ${area}`,
      serviceType: '16-seater minibus hire with driver',
      url: canonical,
      provider: {
        '@type': 'Organization',
        name: 'Oakdale Travel',
        url: siteUrl,
      },
      areaServed: {
        '@type': 'City',
        name: area,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Areas',
          item: `${siteUrl}/areas`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: area,
          item: canonical,
        },
      ],
    },
  ];

  return (
    <Layout
      seoProps={{
        title,
        description,
        canonical,
        jsonLd,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 text-black">

        <nav
          aria-label="Breadcrumb"
          className="text-sm text-black/60 mb-6"
        >
          <Link href="/" className="underline">
            Home
          </Link>
          {' / '}
          <Link href="/areas" className="underline">
            Areas
          </Link>
          {' / '}
          <span>{area}</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Minibus Hire {area} – 16-Seater With Driver
          </h1>

          <p className="mt-5 text-lg leading-8 text-black/80">
            Oakdale Travel provides 16-seater minibus hire in {area} with a
            driver for private groups, airport transfers, events, schools,
            family journeys and pre-booked transport.
          </p>

          <p className="mt-4 leading-7 text-black/80">
            Whether you need a one-way journey, return transport or regular
            minibus travel, send us your pickup location, destination, travel
            date and passenger numbers and we can prepare a quotation.
          </p>

          {UNIQUE[area] && (
            <p className="mt-4 leading-7 text-black/80">
              {UNIQUE[area]}
            </p>
          )}

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

        <section className="mt-14 grid gap-8 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-semibold">
              16-Seater Minibus Hire in {area}
            </h2>

            <p className="mt-4 leading-7 text-black/80">
              Our 16-seater minibus allows groups to travel together rather
              than organising several separate cars or taxis. The service
              includes a driver and can be used for local journeys or
              longer-distance travel.
            </p>

            <p className="mt-4">
              <Link
                href="/services/minibus-hire-16-seater"
                className="underline font-semibold"
              >
                Learn more about our 16-seater minibus
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Minibus Hire With Driver
            </h2>

            <p className="mt-4 leading-7 text-black/80">
              Oakdale Travel provides driver-operated minibus hire, so nobody
              in your group needs to drive. Outward and return journeys can be
              arranged depending on your booking requirements.
            </p>

            <p className="mt-4">
              <Link
                href="/services/minibus-with-driver-hire"
                className="underline font-semibold"
              >
                View minibus hire with a driver
              </Link>
            </p>
          </div>

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Airport Minibus Transfers From {area}
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-black/80">
            Group airport transfers can be arranged from {area} to airports
            including Manchester Airport, Liverpool John Lennon Airport and
            Leeds Bradford Airport. Tell us your passenger numbers and luggage
            requirements when requesting your quote.
          </p>

          <p className="mt-4">
            <Link
              href="/services/airport-transfers-manchester,-liverpool,-leeds-bradford"
              className="underline font-semibold"
            >
              View group airport transfers
            </Link>
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Group Minibus Travel in {area}
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-black/80">
            Our minibus service can be used for weddings, sporting events,
            concerts, family occasions, school transport, days out, business
            journeys and other pre-booked group travel.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-black/80">
            For an accurate quotation, provide your collection point,
            destination, required dates and times, passenger count and any
            luggage or additional journey requirements.
          </p>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Get a Minibus Hire Quote in {area}
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-black/80">
            Contact Oakdale Travel with your journey details and we can provide
            a quotation for your group transport.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-7 py-3 rounded font-semibold"
            >
              Request a Quote
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
