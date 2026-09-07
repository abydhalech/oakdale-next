import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl } from './utils';

export default function FamilyGroupPrivateHirePage() {
  const canonical =
    `${siteUrl}/services/private-hire-for-family-events`;

  const title =
    'Family & Group Minibus Hire | Private 16-Seater With Driver | Oakdale Travel';

  const description =
    'Private minibus hire for family events, birthdays, celebrations, reunions and group journeys. 16-seater with driver across Bolton, Wigan, Manchester and the North West.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#family-group-private-hire`,
      name: 'Family and Group Private Minibus Hire',
      serviceType: 'Private group minibus hire with driver',
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
          name: 'Family & Group Private Hire',
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
          <span>Family &amp; Group Private Hire</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Family &amp; Group Private Minibus Hire
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Oakdale Travel provides private 16-seater minibus hire with a
            driver for families and groups across Bolton, Wigan, Manchester
            and the wider North West.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Whether you are travelling to a birthday, family celebration,
            reunion, meal, day out or another private occasion, we can arrange
            pre-booked group transport for the outward journey, return journey
            or both.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded font-semibold"
            >
              Get a Private Hire Quote
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
              alt="Oakdale Travel 16-seater minibus for family and group private hire"
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
                Private Group Hire
              </h2>

              <p className="mt-2 text-gray-700">
                Pre-booked minibus transport for your family or group.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Up to 16 Passengers
              </h2>

              <p className="mt-2 text-gray-700">
                Travel together in our 16-seater minibus.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Driver Included
              </h2>

              <p className="mt-2 text-gray-700">
                Your private hire booking includes a professional driver.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Return Journeys
              </h2>

              <p className="mt-2 text-gray-700">
                Arrange your outward and return transport in advance.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Family Event Minibus Hire
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Family occasions often involve several people travelling to the
            same place at the same time. Hiring one minibus can make the
            journey easier than coordinating several cars or arranging
            separate taxis.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We can arrange transport from an agreed pickup point or discuss
            multiple collections where practical for the route and timings.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Birthday Minibus Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Group transport can be arranged for birthday meals,
              celebrations, parties and other birthday plans, with return
              travel available where required.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Family Celebrations
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              We provide private transport for family gatherings,
              anniversaries, celebrations and other occasions where a group
              wants to travel together.
            </p>
          </div>

        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Family Reunions &amp; Gatherings
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              If relatives are meeting for a larger family gathering, a
              private minibus can help move the group between homes, hotels,
              venues, restaurants and other agreed locations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Group Meals &amp; Celebrations
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Minibus transport can also be arranged for restaurant bookings,
              celebration meals and other group occasions where nobody wants
              to be responsible for driving.
            </p>
          </div>

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            General Group Private Hire
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Not every journey fits into a specific category. We also provide
            general private minibus hire for groups who simply need reliable
            transport from one place to another.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            This can include family outings, social occasions, restaurant
            trips, entertainment, visiting friends or relatives and other
            pre-booked private journeys.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              16-Seater Private Minibus
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our 16-seater gives families and groups the option of travelling
              together in one vehicle rather than dividing passengers between
              several separate journeys.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              Smaller groups can also request a quotation, so you do not need
              exactly 16 passengers to book the vehicle.
            </p>

            <p className="mt-4">
              <Link
                href="/services/minibus-hire-16-seater"
                className="underline font-semibold"
              >
                View our 16-seater minibus hire
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Private Minibus With Driver
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Every private hire booking includes a driver, allowing everybody
              in your group to travel together without somebody needing to
              drive themselves.
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
            Private Minibus Hire From Bolton, Wigan &amp; Manchester
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel is based in Bolton and provides private minibus
            hire from Bolton, Wigan, Manchester and surrounding areas.
            Longer-distance journeys elsewhere in the UK can also be
            discussed.
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
            Multiple Pickup Points
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Where practical, we can discuss more than one collection point for
            a private group booking. This can be useful when members of the
            group are travelling from different homes or meeting locations.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Include all proposed pickup points when requesting your quotation
            so we can assess the route properly.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Book Private Group Minibus Hire?
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Keep Everyone Together
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                The group can travel together rather than coordinating
                several separate vehicles.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Driver Included
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Nobody in your group needs to be responsible for driving.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Return Transport Available
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Your journey home can be organised at the same time as your
                outward booking.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                One Group Booking
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Transport can be planned around the requirements of your
                group rather than everybody arranging travel separately.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Family &amp; Group Private Hire FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Does private minibus hire include a driver?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides private minibus hire with a
                driver.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                How many passengers can your private minibus carry?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Our main minibus can carry groups of up to 16 passengers.
                Smaller groups can also request a quotation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can we book the minibus for a birthday?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. We provide group transport for birthdays, celebrations,
                meals and other private occasions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you do more than one pickup?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Multiple pickups can be discussed where they are practical for
                the journey and timings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you provide a return journey?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Outward and return transport can both be arranged.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                What information do you need for a private hire quote?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Send us your pickup location, destination, travel date,
                required times, passenger numbers and whether return transport
                is required.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Family or Group Private Hire Quote
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Tell us where your group is travelling from, the destination,
            travel date, passenger numbers and return requirements and we can
            prepare a quotation.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-7 py-3 rounded font-semibold"
            >
              Request a Private Hire Quote
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
