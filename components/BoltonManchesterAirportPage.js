import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl } from './utils';

export default function BoltonManchesterAirportPage() {
  const canonical =
    `${siteUrl}/airport-transfers/bolton-to-manchester-airport`;

  const title =
    'Bolton to Manchester Airport Minibus | Group Transfers | Oakdale Travel';

  const description =
    'Minibus transfers from Bolton to Manchester Airport for groups of 6–16 passengers. Driver included, with outward and return airport journeys available.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: 'Bolton to Manchester Airport Minibus Transfer',
      serviceType: 'Group airport minibus transfer with driver',
      url: canonical,
      provider: {
        '@type': 'Organization',
        name: 'Oakdale Travel',
        url: siteUrl,
      },
      areaServed: {
        '@type': 'City',
        name: 'Bolton',
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
          name: 'Airport Transfers',
          item: `${siteUrl}/services/airport-transfers-manchester,-liverpool,-leeds-bradford`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Bolton to Manchester Airport',
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
          <Link
            href="/services/airport-transfers-manchester,-liverpool,-leeds-bradford"
            className="underline"
          >
            Airport Transfers
          </Link>
          {' / '}
          <span>Bolton to Manchester Airport</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Bolton to Manchester Airport Minibus Transfers
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Travelling from Bolton to Manchester Airport with family,
            friends or a larger group? Oakdale Travel provides private
            minibus transfers from Bolton to Manchester Airport with a
            professional driver.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Our 16-seater minibus is particularly useful for groups who want
            to travel to the airport together instead of arranging several
            cars or taxis. Outward journeys and return airport collections
            can both be booked.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded font-semibold"
            >
              Get an Airport Quote
            </Link>

            <Link
              href="/services/airport-transfers-manchester,-liverpool,-leeds-bradford"
              className="border border-black px-6 py-3 rounded font-semibold"
            >
              View Airport Transfers
            </Link>
          </div>
        </section>

        <section className="mt-10 max-w-3xl">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/fleet/ford-transit-2015-exterior-front.webp"
              alt="Oakdale Travel 16-seater minibus for Bolton to Manchester Airport transfers"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </section>

        <section className="mt-10 border-y border-gray-200 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <h2 className="text-lg font-bold">
                Bolton Pickups
              </h2>
              <p className="mt-2 text-gray-700">
                Airport collections from Bolton and surrounding local areas.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Up to 16 Passengers
              </h2>
              <p className="mt-2 text-gray-700">
                Group airport transport using our 16-seater minibus.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Driver Included
              </h2>
              <p className="mt-2 text-gray-700">
                Your journey includes a professional driver.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Return Trips Available
              </h2>
              <p className="mt-2 text-gray-700">
                Arrange your Manchester Airport return collection as well.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Manchester Airport Transfers From Bolton
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel is based in Bolton, making Manchester Airport
            transfers a natural part of our local group transport service.
            We can arrange collection from your agreed Bolton pickup point
            and transport your group directly to Manchester Airport.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            When requesting a quote, send us your travel date, pickup
            location, flight time, passenger numbers and expected luggage.
            This allows us to plan the journey properly and confirm that the
            vehicle is suitable for your group.
          </p>

          <p className="mt-4">
            <Link
              href="/areas/bolton"
              className="underline font-semibold"
            >
              Learn more about our minibus hire in Bolton
            </Link>
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Airport Minibus for 6, 8, 10, 12 or More Passengers
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Group airport travel becomes more complicated when there are too
            many passengers for a normal car. Our 16-seater gives groups the
            option of travelling together in one vehicle rather than
            splitting between several separate journeys.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            The minibus can accommodate groups of different sizes up to
            16 passengers. Luggage space also needs to be considered, so
            please tell us how many suitcases and larger items your group
            expects to bring when requesting a quotation.
          </p>

          <p className="mt-4">
            <Link
              href="/services/minibus-hire-16-seater"
              className="underline font-semibold"
            >
              View our 16-seater minibus hire
            </Link>
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Bolton Collection Areas
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Airport pickups can be arranged across Bolton, including
              Bolton town centre, Farnworth, Horwich, Westhoughton,
              Little Lever, Bromley Cross, Heaton, Lostock, Kearsley and
              surrounding areas.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              Depending on the booking, we can discuss the most practical
              pickup arrangements for your group when preparing the quote.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Minibus With Driver
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Your Bolton to Manchester Airport transfer includes a driver,
              meaning nobody in your group needs to drive to the airport or
              leave their own vehicle in airport parking while away.
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
          <h2 className="text-2xl md:text-3xl font-bold">
            Return Transfers From Manchester Airport to Bolton
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            If you need transport home after your trip, a return journey from
            Manchester Airport to Bolton can be arranged at the same time as
            your outward transfer.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Give us the return flight details when booking so both parts of
            your airport transport can be included in your quotation.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Use a Minibus From Bolton to Manchester Airport?
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Travel Together
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Keep your family or group together for the journey rather
                than coordinating several cars or taxis.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                No Airport Parking
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                With a driver taking you directly to the airport, your group
                does not need to leave its own vehicles at Manchester Airport.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Suitable for Larger Groups
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Our 16-seater is designed for group travel and can reduce the
                need to divide passengers between multiple vehicles.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Outward &amp; Return Booking
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Arrange both sides of your airport journey with Oakdale
                Travel before you leave.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Bolton to Manchester Airport FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Do you provide minibus transfers from Bolton to Manchester Airport?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides pre-booked minibus transfers
                from Bolton to Manchester Airport with a driver.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you take a group of 8 people from Bolton to Manchester Airport?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Our 16-seater can be suitable for a group of eight.
                Tell us about your luggage as well as your passenger numbers
                when requesting a quote.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can your minibus take 16 passengers to Manchester Airport?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                The minibus can carry up to 16 passengers, although luggage
                requirements must also be considered. We will confirm
                suitability once we have your passenger and luggage details.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you bring us back from Manchester Airport to Bolton?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Outward and return airport transfers can both be arranged.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                What do you need to quote for the journey?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Send us your Bolton pickup location, travel date, flight time,
                passenger numbers, expected luggage and whether you require a
                return transfer.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Bolton to Manchester Airport Minibus Quote
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Tell us where in Bolton your group needs collecting, your flight
            details, passenger numbers, luggage requirements and whether you
            need a return journey. We can then prepare a quotation for your
            airport transfer.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-7 py-3 rounded font-semibold"
            >
              Request an Airport Quote
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
