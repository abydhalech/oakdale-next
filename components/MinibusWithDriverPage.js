import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl } from './utils';

export default function MinibusWithDriverPage() {
  const canonical = `${siteUrl}/services/minibus-with-driver-hire`;

  const title =
    'Minibus Hire With Driver | Bolton, Wigan & Manchester | Oakdale Travel';

  const description =
    'Minibus hire with a driver across Bolton, Wigan, Manchester and the North West for weddings, race days, concerts, sporting events, family travel, day trips, nights out and group journeys.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: 'Minibus Hire With Driver',
      serviceType: 'Minibus hire with driver',
      url: canonical,
      provider: {
        '@type': 'Organization',
        name: 'Oakdale Travel',
        url: siteUrl,
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Bolton',
        },
        {
          '@type': 'City',
          name: 'Wigan',
        },
        {
          '@type': 'City',
          name: 'Manchester',
        },
      ],
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
          name: 'Services',
          item: `${siteUrl}/services`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Minibus With Driver',
          item: canonical,
        },
      ],
    },
  ];

  return (
    <Layout seoProps={{ title, description, canonical, jsonLd }}>
      <div className="max-w-6xl mx-auto px-5 py-10 md:py-14">

        <nav
          aria-label="Breadcrumb"
          className="text-sm text-gray-600 mb-6"
        >
          <Link href="/" className="underline">
            Home
          </Link>
          {' / '}
          <Link href="/services" className="underline">
            Services
          </Link>
          {' / '}
          <span>Minibus With Driver</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Minibus Hire With Driver
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Oakdale Travel provides private minibus hire with a driver across
            Bolton, Wigan, Manchester and the wider North West.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Our driver-operated 16-seater minibus can be booked for weddings,
            race days, concerts and festivals, sporting events, family
            occasions, days out, nights out, airport transfers and other
            pre-booked group journeys.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Simply provide your pickup point, destination, travel date,
            passenger numbers and journey times and we can prepare a quotation
            based on your requirements.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
              View Our 16-Seater Minibus
            </Link>
          </div>
        </section>

        <section className="mt-10 max-w-3xl">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/fleet/ford-transit-2015-exterior-side.webp"
              alt="Oakdale Travel 16-seater minibus available for private hire with driver"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <p className="mt-3 text-sm text-gray-600">
            Oakdale Travel&apos;s 16-seater minibus used for private group,
            event, airport, school and contract transport.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Hire a Minibus With a Driver?
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Hiring a minibus with a driver removes the need for somebody in
            your group to drive, organise several cars or arrange separate
            taxis. Your group can travel together from the agreed pickup point
            to the destination.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Return travel can also be arranged in advance, which is
            particularly useful for weddings, nights out, race days,
            concerts, sporting events and other occasions where the whole
            group wants transport in both directions.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              16-Seater Minibus With Driver
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our main private hire vehicle is a 16-seater minibus, suitable
              for groups wanting to travel together in one vehicle.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              Smaller groups can also request a quotation, so you do not need
              exactly 16 passengers to use the service.
            </p>

            <p className="mt-4">
              <Link
                href="/services/minibus-hire-16-seater"
                className="underline font-semibold"
              >
                View 16-seater minibus hire
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Private Group Minibus Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              The minibus can be booked for one-off private journeys,
              birthdays, celebrations, family gatherings, social occasions
              and other group travel.
            </p>

            <p className="mt-4">
              <Link
                href="/services/private-hire-for-family-events"
                className="underline font-semibold"
              >
                View family &amp; group private hire
              </Link>
            </p>
          </div>

        </section>

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold">
            Popular Private Minibus Hire With Driver
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We provide driver-operated minibus transport for a range of
            private occasions and group journeys. Choose the type of trip you
            are planning for more information.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold">
                Wedding Minibus Hire
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Transport for wedding guests travelling between homes,
                hotels, ceremonies, receptions and venues.
              </p>

              <p className="mt-4">
                <Link
                  href="/services/wedding-transport-hire"
                  className="underline font-semibold"
                >
                  View wedding minibus hire
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold">
                Race Day Minibus Hire
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Private group transport to Haydock, Aintree, York, Chester
                and other racecourses across the UK.
              </p>

              <p className="mt-4">
                <Link
                  href="/services/race-day-minibus-hire"
                  className="underline font-semibold"
                >
                  View race day minibus hire
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold">
                Concert &amp; Festival Minibus Hire
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Group transport for concerts, festivals and entertainment
                events with outward and return journeys available.
              </p>

              <p className="mt-4">
                <Link
                  href="/services/concert-festival-event-minibus-hire"
                  className="underline font-semibold"
                >
                  View concert &amp; festival transport
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold">
                Match Day &amp; Sporting Events
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Private minibus transport for supporters travelling to
                football, rugby and other sporting events.
              </p>

              <p className="mt-4">
                <Link
                  href="/services/sporting-event-match-day-minibus-hire"
                  className="underline font-semibold"
                >
                  View sporting event minibus hire
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold">
                Family &amp; Group Private Hire
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Private transport for birthdays, family gatherings,
                celebrations, meals and other group occasions.
              </p>

              <p className="mt-4">
                <Link
                  href="/services/private-hire-for-family-events"
                  className="underline font-semibold"
                >
                  View family &amp; group private hire
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold">
                Day Trip Minibus Hire
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Group transport for seaside trips, attractions,
                sightseeing, family days out and UK excursions.
              </p>

              <p className="mt-4">
                <Link
                  href="/services/day-trips-and-excursions"
                  className="underline font-semibold"
                >
                  View day trip minibus hire
                </Link>
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold">
                Group Nights Out
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Private transport for restaurants, birthdays, bars,
                celebrations and evenings out with return travel available.
              </p>

              <p className="mt-4">
                <Link
                  href="/services/group-nights-out-transport"
                  className="underline font-semibold"
                >
                  View group nights out transport
                </Link>
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Airport Minibus With Driver
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              We also provide group airport transfers with a driver to
              Manchester Airport, Liverpool John Lennon Airport and Leeds
              Bradford Airport. Outbound and return journeys can be arranged
              around your travel requirements.
            </p>

            <p className="mt-4">
              <Link
                href="/services/airport-transfers-manchester,-liverpool,-leeds-bradford"
                className="underline font-semibold"
              >
                View our airport transfer service
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              School and Contract Transport
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Oakdale Travel also provides driver-operated minibus transport
              for schools, councils and organisations. Drivers working on
              relevant services are DBS checked, and regular transport
              requirements can be discussed directly with us.
            </p>

            <p className="mt-4">
              <Link
                href="/services/school-transport-services"
                className="underline font-semibold"
              >
                View school transport services
              </Link>
            </p>
          </div>

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Minibus With Driver Across Bolton, Wigan and Manchester
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel is based in Bolton and provides minibus transport
            with a driver across Bolton, Wigan, Manchester and surrounding
            areas of Greater Manchester and the North West.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Longer-distance journeys to destinations elsewhere in the UK can
            also be quoted depending on your travel requirements.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/areas/bolton"
              className="underline font-semibold"
            >
              Minibus hire Bolton
            </Link>

            <Link
              href="/areas/wigan"
              className="underline font-semibold"
            >
              Minibus hire Wigan
            </Link>

            <Link
              href="/areas/manchester"
              className="underline font-semibold"
            >
              Minibus hire Manchester
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Minibus Hire With Driver FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Is the driver included in the minibus hire?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides minibus hire with a driver.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                How many passengers can your minibus carry?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Our main minibus can carry groups of up to 16 passengers.
                Smaller groups can also request a quotation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can I book a return journey?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Provide your outward and return dates and times when
                requesting your quote so we can price the complete journey.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can I book a minibus with a driver for a wedding or event?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. We provide private transport for weddings, race days,
                concerts, festivals, sporting events, family occasions,
                nights out, day trips and other group journeys.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do you provide minibus hire with a driver for nights out?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Outward and return group transport can be arranged for
                nights out, meals, birthdays and other evening occasions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Where do you provide minibus hire with a driver?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Our main service areas include Bolton, Wigan and Manchester,
                alongside surrounding parts of Greater Manchester and the
                North West. We also provide longer-distance journeys elsewhere
                in the UK.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Minibus With Driver Quote
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Send us your pickup location, destination, travel date, required
            times, passenger numbers and any relevant luggage requirements and
            we can prepare a quotation for your journey.
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
