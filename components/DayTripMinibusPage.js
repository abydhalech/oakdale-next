import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl } from './utils';

export default function DayTripMinibusPage() {
  const canonical =
    `${siteUrl}/services/day-trips-and-excursions`;

  const title =
    'Day Trip Minibus Hire | 16-Seater With Driver | Oakdale Travel';

  const description =
    'Day trip minibus hire with a driver for families and groups from Bolton, Wigan, Manchester and the North West. 16-seater private transport for UK days out and excursions.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#day-trip-minibus-hire`,
      name: 'Day Trip Minibus Hire',
      serviceType: 'Day trip and excursion minibus hire with driver',
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
          name: 'Day Trip Minibus Hire',
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
          <span>Day Trip Minibus Hire</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Day Trip Minibus Hire – 16-Seater With Driver
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Oakdale Travel provides private day trip minibus hire with a
            driver for families, friends and groups travelling from Bolton,
            Wigan, Manchester and surrounding areas.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Whether your group is planning a seaside trip, family day out,
            sightseeing visit, attraction, shopping trip or longer-distance
            excursion, our 16-seater minibus allows everybody to travel
            together.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded font-semibold"
            >
              Get a Day Trip Quote
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
              alt="Oakdale Travel 16-seater minibus for group day trips and excursions"
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
                Private group transport for up to 16 passengers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Driver Included
              </h2>

              <p className="mt-2 text-gray-700">
                Your day trip booking includes a professional driver.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                UK Days Out
              </h2>

              <p className="mt-2 text-gray-700">
                Transport for attractions, cities, seaside trips and excursions.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Return Journey
              </h2>

              <p className="mt-2 text-gray-700">
                Travel to your destination and return later the same day.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Group Minibus Hire for Days Out
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Organising a day out for a larger group can mean several cars,
            multiple parking arrangements and people arriving at different
            times. A private minibus gives the group one journey and one
            agreed collection point.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Your return journey can also be arranged in advance, so transport
            is already organised when your day out finishes.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Blackpool Day Trip Minibus Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Blackpool is a popular destination for family days out, groups,
              attractions, entertainment and seaside trips. We can provide
              private minibus transport from Bolton, Wigan, Manchester and
              surrounding areas with return travel arranged in advance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Lake District Minibus Trips
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Groups planning a day in the Lake District can book a minibus
              with a driver rather than organising several separate vehicles
              for the journey.
            </p>
          </div>

        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Chester Day Trips
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Private group transport can be arranged for days out in Chester,
              including sightseeing, shopping, attractions, meals and other
              group plans.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              York Day Trips
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Longer-distance day trips to York can also be arranged for
              families and groups wanting private transport for the complete
              outward and return journey.
            </p>
          </div>

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Theme Parks, Attractions &amp; Family Days Out
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Our day trip service can also be used for theme parks, zoos,
            family attractions, shopping centres, sightseeing destinations
            and other organised group days out.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Tell us where your group wants to go, the date, passenger numbers
            and required pickup and return times and we can assess the journey.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Seaside Minibus Trips
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Seaside days out are well suited to group minibus travel,
            particularly when families or groups want to spend the day
            together without taking several vehicles.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We can quote for destinations across the North West and other UK
            coastal locations depending on your journey requirements.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              16-Seater Day Trip Minibus
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our 16-seater minibus is suitable for larger families, groups of
              friends and organised groups travelling together for a day out.
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
              Day Trip Minibus With Driver
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Your booking includes a driver, meaning everybody in the group
              can enjoy the day rather than somebody being responsible for
              driving the entire journey.
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
            Day Trip Minibus Hire From Bolton, Wigan &amp; Manchester
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel is based in Bolton and provides day trip minibus
            hire from Bolton, Wigan, Manchester and surrounding areas. Group
            journeys to destinations elsewhere in the UK can also be
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
            Why Book a Minibus for a Day Trip?
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Travel Together
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Everyone can leave together and arrive at the destination as
                one group.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Driver Included
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Nobody in your group needs to spend the day worrying about
                driving.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Return Journey Arranged
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Your transport home can be booked at the same time as the
                outward journey.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                One Group Booking
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                The journey can be planned around your group rather than
                everybody organising their own transport.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Day Trip Minibus Hire FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Does day trip minibus hire include a driver?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides day trip minibus hire with a
                driver.
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
                Can you take us to Blackpool for the day?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. We can provide private group transport to Blackpool with
                outward and return travel arranged.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do you provide longer-distance day trips?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Longer-distance UK journeys can be discussed when
                requesting your quotation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can we have more than one pickup point?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Multiple pickups can be discussed where they are practical for
                the route and timings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                What information do you need for a day trip quote?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Send us your pickup location, destination, travel date,
                passenger numbers, required departure time and expected
                return time.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Day Trip Minibus Quote
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Tell us where your group wants to go, your pickup location, travel
            date, passenger numbers and return plans and we can prepare a
            quotation for your day out.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-7 py-3 rounded font-semibold"
            >
              Request a Day Trip Quote
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
