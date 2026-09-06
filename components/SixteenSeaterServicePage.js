import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl } from './utils';

export default function SixteenSeaterServicePage() {
  const canonical = `${siteUrl}/services/minibus-hire-16-seater`;

  const title =
    '16-Seater Minibus Hire With Driver | Oakdale Travel';

  const description =
    '16-seater minibus hire with a driver for weddings, race days, concerts, sporting events, family travel, day trips and group journeys across Bolton, Wigan, Manchester and the North West.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: '16-Seater Minibus Hire With Driver',
      serviceType: '16-seater minibus hire with driver',
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
          name: '16-Seater Minibus Hire',
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
          <span>16-Seater Minibus Hire</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            16-Seater Minibus Hire With Driver
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Oakdale Travel provides private 16-seater minibus hire with a
            driver for group journeys across Bolton, Wigan, Manchester and the
            wider North West.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Our minibus can be booked for weddings, race days, concerts and
            festivals, sporting events, family occasions, day trips, nights
            out, airport transfers and other pre-booked group journeys across
            the UK.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Tell us your pickup point, destination, travel date, passenger
            numbers and journey times and we can provide a quotation based on
            your requirements.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded font-semibold"
            >
              Get a Quote
            </Link>

            <Link
              href="/services/minibus-with-driver-hire"
              className="border border-black px-6 py-3 rounded font-semibold"
            >
              Minibus With Driver
            </Link>
          </div>
        </section>

        <section className="mt-10 max-w-3xl">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/fleet/ford-transit-2015-exterior-front.webp"
              alt="Oakdale Travel 16-seater Ford Transit minibus available for private hire with driver"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <p className="mt-3 text-sm text-gray-600">
            Oakdale Travel&apos;s 16-seater Ford Transit minibus used for
            private group, event, airport, school and contract transport.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Hire a 16-Seater Minibus?
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            A 16-seater minibus is a practical option for groups that are too
            large for a standard taxi or private car. Your group can travel
            together with one planned transport arrangement rather than
            coordinating several separate cars or taxis.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            It can work particularly well for families, groups of friends,
            wedding guests, racegoers, football supporters, concert groups,
            airport passengers and organised days out.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Minibus Hire With a Driver
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our minibus hire includes a driver, so there is no need for
              someone in your group to drive the vehicle. We plan the journey
              around the pickup location, destination and times provided when
              you book.
            </p>

            <p className="mt-4">
              <Link
                href="/services/minibus-with-driver-hire"
                className="underline font-semibold"
              >
                Learn more about minibus hire with a driver
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Private Group Minibus Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our 16-seater can be booked for one-off private journeys,
              celebrations, events, evenings out and longer-distance group
              travel. Smaller groups can also request a quotation.
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
            Popular 16-Seater Private Hire
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Our minibus is used for a wide range of private group journeys.
            Choose the type of trip you are planning to see more information
            about the transport we provide.
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
                events, including outward and return journeys.
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
                Minibus hire for birthdays, family gatherings, celebrations
                and other private group occasions.
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
                Private transport for seaside trips, attractions,
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
              Airport Group Transfers
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              A 16-seater can also be useful for groups travelling together to
              Manchester Airport, Liverpool John Lennon Airport or Leeds
              Bradford Airport. When requesting your quote, let us know your
              passenger numbers and expected luggage so we can assess the
              booking properly.
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
              Oakdale Travel also provides regular school and contract
              transport. Drivers working on relevant services are DBS checked,
              and recurring transport requirements can be discussed directly
              with schools, councils and organisations.
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
            Inside Our 16-Seater Minibus
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Seeing the vehicle before booking can help you understand the
            seating layout and the type of transport being provided. The
            images on this page show one of the vehicles used by Oakdale
            Travel.
          </p>

          <div className="mt-8">
            <Image
              src="/fleet/ford-transit-2015-interior-seats.webp"
              alt="Interior seating of Oakdale Travel 16-seater minibus"
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 280px, 650px"
              className="w-[280px] sm:w-[380px] md:w-[650px] h-auto rounded-lg"
            />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            16-Seater Minibus Hire Across Bolton, Wigan and Manchester
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel is based in Bolton and provides group transport
            across Greater Manchester and the surrounding North West. Our
            main service areas include Bolton, Wigan and Manchester,
            alongside surrounding towns and longer-distance journeys
            throughout the UK.
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
            16-Seater Minibus Hire FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Does the minibus come with a driver?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides 16-seater minibus hire with a
                driver.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do I need exactly 16 passengers?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                No. Smaller groups can also request a quotation for the
                16-seater minibus.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can I book the minibus for a return journey?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Provide your outward and return dates and times when
                requesting a quote so we can price the complete journey.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can I book the minibus for a wedding, concert or race day?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. The minibus can be booked for weddings, race days,
                concerts, festivals, sporting events, family occasions,
                nights out, day trips and other private group journeys.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can a 16-seater minibus be used for airport transfers?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. We provide group airport transfers including Manchester,
                Liverpool John Lennon and Leeds Bradford airports. Passenger
                numbers and luggage requirements should be provided when
                requesting your quote.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Which areas do you provide 16-seater minibus hire in?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                We provide minibus hire across Bolton, Wigan, Manchester and
                other parts of Greater Manchester and the North West, as well
                as longer-distance journeys elsewhere in the UK.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a 16-Seater Minibus Hire Quote
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Send us your pickup point, destination, travel date, required
            times, passenger numbers and expected luggage where relevant to
            receive a quote for your journey.
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
