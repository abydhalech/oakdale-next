import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl } from './utils';

export default function WeddingMinibusPage() {
  const canonical = `${siteUrl}/services/wedding-transport-hire`;

  const title =
    'Wedding Minibus Hire | 16-Seater With Driver | Oakdale Travel';

  const description =
    'Wedding minibus hire with a driver for guest transport across Bolton, Wigan, Manchester and the North West. 16-seater transport for venues, hotels and return journeys.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#wedding-minibus-hire`,
      name: 'Wedding Minibus Hire',
      serviceType: 'Wedding guest minibus transport with driver',
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
          name: 'Wedding Minibus Hire',
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
          <span>Wedding Minibus Hire</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Wedding Minibus Hire – 16-Seater With Driver
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Oakdale Travel provides wedding minibus hire with a driver for
            couples, families and wedding guests across Bolton, Wigan,
            Manchester and the wider North West.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Our 16-seater minibus can be used to transport guests between
            homes, hotels, ceremony venues and wedding receptions, with
            outward and return journeys arranged around your wedding plans.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded font-semibold"
            >
              Get a Wedding Quote
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
              src="/fleet/ford-transit-2015-exterior-side.webp"
              alt="Oakdale Travel 16-seater minibus available for wedding guest transport"
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
                16-Seater Minibus
              </h2>

              <p className="mt-2 text-gray-700">
                Transport for wedding groups of up to 16 passengers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Driver Included
              </h2>

              <p className="mt-2 text-gray-700">
                Your wedding minibus booking includes a professional driver.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Guest Transport
              </h2>

              <p className="mt-2 text-gray-700">
                Transport between agreed pickup points, hotels and wedding
                venues.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Return Journeys
              </h2>

              <p className="mt-2 text-gray-700">
                Evening and return transport can be included in your booking.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Wedding Guest Minibus Transport
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Organising transport for wedding guests can become difficult when
            people are travelling from different locations or when parking at
            the venue is limited. A private minibus allows a group of guests
            to travel together rather than arranging several separate cars or
            taxis.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Depending on your plans, we can discuss collections from an agreed
            home, hotel or meeting point and transport your group to the
            ceremony or reception venue.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Hotel to Wedding Venue Transport
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              If wedding guests are staying at a hotel, we can arrange a
              pre-booked pickup and transport the group to the wedding venue.
              This can make the journey simpler for guests who do not know the
              area or do not want to drive.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Ceremony to Reception Transport
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              When the ceremony and reception are held at different
              locations, minibus transport can be arranged between the two
              venues for your group.
            </p>
          </div>

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Evening &amp; Return Wedding Transport
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Transport does not have to end when your guests arrive at the
            venue. A return journey can also be arranged for later in the
            evening so your group has pre-booked transport home or back to
            their hotel.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            When requesting your quote, tell us the expected pickup and return
            times so the complete journey can be assessed together.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              16-Seater Wedding Minibus
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our 16-seater minibus is well suited to families and groups of
              wedding guests who want to travel together.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              Smaller groups can also use the vehicle, so you do not
              necessarily need 16 passengers to request a wedding transport
              quote.
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
              Wedding Minibus With Driver
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Your booking includes a driver, meaning nobody in your group
              needs to drive themselves to the wedding or worry about leaving
              a vehicle at the venue overnight.
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
            Wedding Minibus Hire Across Bolton, Wigan &amp; Manchester
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel is based in Bolton and provides wedding group
            transport across Bolton, Wigan, Manchester and surrounding areas.
            Longer-distance wedding journeys can also be discussed when
            requesting your quotation.
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
            Multiple Wedding Pickups
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Where practical, more than one pickup point can be discussed as
            part of your wedding transport booking. For example, some guests
            may need collecting from a hotel while others are travelling from
            another agreed location.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Include all proposed pickup points when asking for a quote so we
            can assess the route and timings correctly.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Hire a Minibus for a Wedding?
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Keep Guests Together
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                A group can travel together rather than coordinating several
                separate vehicles.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Less Parking to Arrange
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Fewer guest vehicles can mean less dependence on parking at
                the ceremony or reception venue.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Pre-Booked Return Travel
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Guests can have their return transport arranged before the
                wedding day.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                One Group Booking
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                The transport requirements can be discussed as one group
                journey rather than guests arranging separate taxis.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Wedding Minibus Hire FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Does wedding minibus hire include a driver?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides wedding minibus hire with a
                driver.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                How many wedding guests can your minibus carry?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Our main minibus accommodates groups of up to 16 passengers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you collect guests from a hotel?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Hotel pickups and other agreed collection points can be
                included when planning the booking.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you take guests from the ceremony to the reception?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Where the ceremony and reception are at different
                locations, transport between venues can be discussed when
                requesting your quote.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you provide transport home after the wedding?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Return transport can be included as part of the booking.
                Provide the expected return time when requesting your quote.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                What information do you need for a wedding transport quote?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Send us the wedding date, pickup locations, venue or venues,
                required times, passenger numbers and whether return transport
                is required.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Wedding Minibus Hire Quote
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Tell us your wedding date, collection points, venue locations,
            passenger numbers, required times and return plans and we can
            prepare a quotation for your wedding transport.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-7 py-3 rounded font-semibold"
            >
              Request a Wedding Quote
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
