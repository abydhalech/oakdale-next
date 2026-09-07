import Link from 'next/link';
import Layout from '../../components/Layout';
import { siteUrl } from '../../components/utils';

const coreServices = [
  {
    name: '16-Seater Minibus Hire',
    href: '/services/minibus-hire-16-seater',
    description:
      'Private group transport for up to 16 passengers with a driver.',
  },
  {
    name: 'Minibus Hire With Driver',
    href: '/services/minibus-with-driver-hire',
    description:
      'Driver-operated minibus transport for private groups and pre-booked journeys.',
  },
  {
    name: 'Airport Transfers',
    href: '/services/airport-transfers-manchester,-liverpool,-leeds-bradford',
    description:
      'Group transfers to Manchester, Liverpool John Lennon and Leeds Bradford airports.',
  },
];

const privateHireServices = [
  {
    name: 'Wedding Minibus Hire',
    href: '/services/wedding-transport-hire',
    description:
      'Transport for wedding guests, hotels, ceremonies, receptions and venues.',
  },
  {
    name: 'Race Day Minibus Hire',
    href: '/services/race-day-minibus-hire',
    description:
      'Group transport to Haydock, Aintree, York, Chester and other UK racecourses.',
  },
  {
    name: 'Concert & Festival Minibus Hire',
    href: '/services/concert-festival-event-minibus-hire',
    description:
      'Private group transport for concerts, festivals and entertainment events.',
  },
  {
    name: 'Match Day & Sporting Event Minibus Hire',
    href: '/services/sporting-event-match-day-minibus-hire',
    description:
      'Transport for supporters travelling to football, rugby and other sporting events.',
  },
  {
    name: 'Family & Group Private Hire',
    href: '/services/private-hire-for-family-events',
    description:
      'Private transport for birthdays, family occasions, celebrations and group journeys.',
  },
  {
    name: 'Day Trip Minibus Hire',
    href: '/services/day-trips-and-excursions',
    description:
      'Transport for attractions, seaside trips, sightseeing and group days out.',
  },
  {
    name: 'Group Nights Out',
    href: '/services/group-nights-out-transport',
    description:
      'Transport for restaurants, birthdays, celebrations and evenings out.',
  },
  {
    name: 'Stag & Hen Party Transport',
    href: '/services/stag-and-hen-party-transport',
    description:
      'Private group transport for stag and hen celebrations.',
  },
];

const otherServices = [
  {
    name: 'School Transport Services',
    href: '/services/school-transport-services',
  },
  {
    name: 'Adult Social Care Transport',
    href: '/services/adult-social-care-transport',
  },
  {
    name: 'Contract Transport Services',
    href: '/services/contract-transport-services-schools-&-councils',
  },
  {
    name: 'Corporate Travel & Events',
    href: '/services/corporate-travel-and-events',
  },
  {
    name: 'Sports Team Travel',
    href: '/services/sports-team-travel',
  },
  {
    name: 'UK Holiday Transfers',
    href: '/services/holiday-transfers-uk-destinations',
  },
];

const serviceJsonLd = [
  ...coreServices,
  ...privateHireServices,
  ...otherServices,
].map((service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  url: `${siteUrl}${service.href}`,
  provider: {
    '@type': 'Organization',
    name: 'Oakdale Travel',
    url: siteUrl,
  },
}));

export default function ServicesPage() {
  return (
    <Layout
      seoProps={{
        title:
          'Minibus Hire Services | Private Group Transport | Oakdale Travel',
        description:
          'Explore Oakdale Travel minibus hire services including weddings, race days, concerts, sporting events, family travel, day trips, nights out, airport transfers and contract transport.',
        canonical: `${siteUrl}/services`,
        jsonLd: serviceJsonLd,
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-12 text-black">

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Minibus Hire Services
          </h1>

          <p className="mt-5 text-lg leading-8 text-black/80">
            Oakdale Travel provides 16-seater minibus hire with a driver
            across Bolton, Wigan, Manchester and the wider North West.
          </p>

          <p className="mt-4 leading-7 text-black/80">
            Choose the type of journey you are planning below for more
            information about our private hire, event, airport and contract
            transport services.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Minibus Hire
          </h2>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <div
                key={service.href}
                className="border border-gray-200 rounded-lg p-5"
              >
                <h3 className="text-xl font-semibold">
                  {service.name}
                </h3>

                <p className="mt-3 leading-7 text-black/70">
                  {service.description}
                </p>

                <p className="mt-4">
                  <Link
                    href={service.href}
                    className="underline font-semibold"
                  >
                    View service
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold">
            Private Hire &amp; Events
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-black/80">
            Private minibus hire is available for events, celebrations,
            days out and group journeys across the North West and to
            destinations elsewhere in the UK.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {privateHireServices.map((service) => (
              <div
                key={service.href}
                className="border border-gray-200 rounded-lg p-5"
              >
                <h3 className="text-xl font-semibold">
                  {service.name}
                </h3>

                <p className="mt-3 leading-7 text-black/70">
                  {service.description}
                </p>

                <p className="mt-4">
                  <Link
                    href={service.href}
                    className="underline font-semibold"
                  >
                    View service
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold">
            School, Contract &amp; Other Transport
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {otherServices.map((service) => (
              <div
                key={service.href}
                className="border border-gray-200 rounded-lg p-5"
              >
                <h3 className="text-lg font-semibold">
                  {service.name}
                </h3>

                <p className="mt-3">
                  <Link
                    href={service.href}
                    className="underline font-semibold"
                  >
                    View service
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Minibus Hire Quote
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-black/80">
            Send us your pickup location, destination, travel date,
            required times and passenger numbers and we can prepare a
            quotation for your journey.
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
