import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl } from './utils';

export default function AirportTransfersPage() {
  const canonical =
    `${siteUrl}/services/airport-transfers-manchester,-liverpool,-leeds-bradford`;

  const title =
    'Group Airport Transfers | Manchester Airport Minibus | Oakdale Travel';

  const description =
    'Group airport transfers for 6–16 passengers with a driver. 16-seater minibus hire to Manchester, Liverpool and Leeds Bradford airports.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#airport-transfers`,
      name: 'Group Airport Transfers',
      serviceType: 'Airport minibus transfers with driver',
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
          name: 'Airport Transfers',
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
          <span>Airport Transfers</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Group Airport Transfers – Minibus With Driver
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Travelling to the airport as a family, group of friends, sports
            team or business group? Oakdale Travel provides private group
            airport transfers with a driver from Bolton, Wigan, Manchester
            and surrounding areas.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Our 16-seater minibus is ideal when your group is too large for a
            normal car or taxi. We can transport groups travelling to
            Manchester Airport, Liverpool John Lennon Airport and Leeds
            Bradford Airport, with outward and return journeys available.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded font-semibold"
            >
              Get an Airport Quote
            </Link>

            <Link
              href="/services/minibus-hire-16-seater"
              className="border border-black px-6 py-3 rounded font-semibold"
            >
              View Our 16-Seater
            </Link>
          </div>
        </section>

        <section className="mt-10 max-w-3xl">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/fleet/ford-transit-2015-exterior-front.webp"
              alt="Oakdale Travel 16-seater minibus used for group airport transfers"
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
                Group Airport Travel
              </h2>
              <p className="mt-2 text-gray-700">
                A practical option for families and groups travelling
                together.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Up to 16 Passengers
              </h2>
              <p className="mt-2 text-gray-700">
                16-seater minibus transport, with luggage requirements
                discussed before booking.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Driver Included
              </h2>
              <p className="mt-2 text-gray-700">
                Your airport minibus booking includes a professional driver.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Outward &amp; Return
              </h2>
              <p className="mt-2 text-gray-700">
                Book your journey to the airport and arrange your return
                collection as well.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Airport Transfer for 6, 7, 8 or More Passengers
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Once a group reaches six, seven, eight or more passengers,
            arranging several cars or taxis can become inconvenient. A
            private minibus allows your group to travel together from the
            agreed pickup point to the airport.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We regularly accommodate larger groups, including groups of
            8, 10, 12, 14 and up to 16 passengers. The amount of luggage
            matters, particularly with larger groups, so tell us how many
            passengers and suitcases you expect when requesting a quote.
            We can then confirm whether the vehicle is suitable for your
            journey.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Manchester Airport Minibus Transfers
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Manchester Airport is one of our main airport destinations.
              We provide pre-booked minibus transfers for families, groups,
              businesses and organisations travelling to and from the
              airport.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              We can arrange pickups from Bolton, Wigan, Manchester and
              surrounding areas, as well as return collections following
              your trip.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Airport Minibus With Driver
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Every Oakdale Travel airport minibus booking includes a
              driver. Your group can be collected from an agreed location
              and taken directly to the airport without somebody in the
              group needing to drive or leave a vehicle at airport parking.
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

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            16-Seater Airport Minibus
          </h2>

          <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">

            <div>
              <p className="leading-7 text-gray-700">
                Our 16-seater minibus gives larger groups the option of
                travelling together rather than splitting passengers
                between several vehicles.
              </p>

              <p className="mt-4 leading-7 text-gray-700">
                It can be suitable for family holidays, group trips,
                wedding parties, business travel, sports groups and other
                airport journeys. For larger passenger numbers, luggage
                requirements should always be provided when booking so we
                can confirm suitability.
              </p>

              <p className="mt-4">
                <Link
                  href="/services/minibus-hire-16-seater"
                  className="underline font-semibold"
                >
                  See our 16-seater minibus hire service
                </Link>
              </p>
            </div>

            <div>
              <Image
                src="/fleet/ford-transit-2015-interior-seats.webp"
                alt="Interior of Oakdale Travel 16-seater airport minibus"
                width={650}
                height={850}
                sizes="(max-width: 768px) 280px, 500px"
                className="w-[280px] sm:w-[380px] md:w-[500px] h-auto rounded-lg"
              />
            </div>

          </div>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Liverpool Airport Transfers
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              We also provide private group transfers to Liverpool John
              Lennon Airport. This can be useful for groups travelling from
              Bolton, Wigan and other parts of the North West who want to
              travel together in one vehicle.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Leeds Bradford Airport Transfers
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Group transfers to Leeds Bradford Airport can also be arranged.
              Send us your collection location, flight details, passenger
              numbers and luggage requirements for a quotation.
            </p>
          </div>

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Airport Transfers From Bolton, Wigan &amp; Manchester
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel is based in Bolton and serves customers across
            Greater Manchester and the wider North West. Airport minibus
            collections can be arranged from homes, hotels, workplaces and
            other agreed pickup locations.
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

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Book a Group Airport Minibus?
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Keep the Group Together
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Everyone can leave from the agreed pickup location and
                travel to the airport together rather than coordinating
                several separate vehicles.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                No Airport Parking to Arrange
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Because a driver takes your group to the airport, you do not
                need to leave your own vehicle in airport parking for the
                duration of your trip.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Return Journey Available
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Your return airport pickup can be arranged at the same time
                as your outward booking.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                One Quote for the Group
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Give us the journey details and passenger numbers and we can
                quote for transporting the group rather than passengers
                arranging separate journeys themselves.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Group Airport Transfer FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Can you provide an airport transfer for 8 people?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Our 16-seater minibus can be suitable for groups of
                eight passengers. Tell us how much luggage you will have
                when requesting your quote.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you take 10, 12 or 16 passengers to Manchester Airport?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Our minibus can carry up to 16 passengers, but available
                luggage space must also be considered. Give us your
                passenger and luggage numbers and we will confirm whether
                the vehicle is suitable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Does the airport transfer include a driver?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides airport minibus hire with a
                driver.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you collect us again when we return?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Outward and return airport journeys can both be
                arranged when you make your booking.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                What information do you need for an airport transfer quote?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Send us your pickup location, airport, travel date, flight
                time, passenger numbers, expected luggage and whether you
                require a return journey.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Group Airport Transfer Quote
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Tell us where your group needs collecting, which airport you are
            travelling to, your dates and times, passenger numbers and
            luggage requirements. We can then prepare a quotation for your
            journey.
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
