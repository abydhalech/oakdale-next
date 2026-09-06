import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl } from './utils';

export default function GroupNightsOutMinibusPage() {
  const canonical =
    `${siteUrl}/services/group-nights-out-transport`;

  const title =
    'Group Nights Out Minibus Hire | 16-Seater With Driver | Oakdale Travel';

  const description =
    'Group nights out minibus hire with a driver from Bolton, Wigan, Manchester and the North West. 16-seater transport for bars, restaurants, birthdays and evenings out.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#group-nights-out-minibus`,
      name: 'Group Nights Out Minibus Hire',
      serviceType: 'Private minibus hire with driver for group nights out',
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
          name: 'Group Nights Out Minibus Hire',
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
          <span>Group Nights Out Minibus Hire</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Group Nights Out Minibus Hire – 16-Seater With Driver
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Oakdale Travel provides private minibus hire with a driver for
            group nights out from Bolton, Wigan, Manchester and surrounding
            areas.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Whether your group is heading to restaurants, bars, clubs,
            birthday celebrations or an evening event, our 16-seater minibus
            allows everyone to travel together with return transport arranged
            in advance.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded font-semibold"
            >
              Get a Night Out Quote
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
              alt="Oakdale Travel 16-seater minibus for group nights out"
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
                Group transport for up to 16 passengers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Driver Included
              </h2>
              <p className="mt-2 text-gray-700">
                Nobody in your group needs to drive.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Evenings &amp; Celebrations
              </h2>
              <p className="mt-2 text-gray-700">
                Private transport for meals, bars, birthdays and nights out.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Return Travel
              </h2>
              <p className="mt-2 text-gray-700">
                Pre-book your journey home before the night begins.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Minibus Hire for Group Nights Out
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Nights out are easier when the transport is already organised.
            Instead of arranging several taxis or deciding who is going to
            drive, your group can travel together from an agreed pickup point
            and arrange return transport in advance.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We can provide transport for birthday nights out, meals,
            celebrations, bars, clubs, entertainment venues and other
            pre-booked evening plans.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Manchester Nights Out
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Groups travelling into Manchester can arrange private minibus
              transport for restaurants, bars, clubs, entertainment venues
              and other evening plans, with return travel booked in advance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Liverpool Nights Out
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Longer-distance evening transport to Liverpool can also be
              arranged for group celebrations, meals, nightlife and other
              private occasions.
            </p>
          </div>

        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Birthday Night Out Minibus Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Birthday groups can book private minibus transport for meals,
              bars, clubs, entertainment venues or other plans, with outward
              and return transport arranged around the evening.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Restaurant &amp; Celebration Transport
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              We also provide group transport for restaurant bookings,
              celebration meals, anniversaries and other evening occasions
              where everybody wants to travel together.
            </p>
          </div>

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Return Transport After Your Night Out
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            One of the main benefits of pre-booked minibus hire is knowing how
            the group is getting home before the evening starts. Return
            transport can be arranged as part of the same booking.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Tell us your expected return time and pickup location when
            requesting your quote so the full journey can be planned.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              16-Seater Minibus for Nights Out
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our 16-seater minibus is suitable for groups wanting private
              transport for an evening out. Smaller groups can also request a
              quote, so you do not need exactly 16 passengers.
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
              Night Out Minibus With Driver
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Your booking includes a driver, so nobody in the group needs to
              be responsible for driving during the evening.
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
            Nights Out From Bolton, Wigan &amp; Manchester
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel is based in Bolton and provides private group
            transport from Bolton, Wigan, Manchester and surrounding areas.
            Longer-distance evening journeys can also be discussed.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/areas/bolton" className="underline font-semibold">
              Minibus Hire Bolton
            </Link>

            <Link href="/areas/wigan" className="underline font-semibold">
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
            Why Book a Minibus for a Night Out?
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Travel Together
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Your group can start and finish the evening together.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Nobody Needs to Drive
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Your booking includes a driver for the journey.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Return Travel Arranged
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Know how your group is getting home before the night begins.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                One Group Booking
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Avoid everyone arranging separate taxis and collection points.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Group Nights Out Minibus Hire FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Does night out minibus hire include a driver?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides private group minibus hire with a
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
                Can you take us into Manchester for a night out?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Group transport can be arranged for nights out,
                restaurants, bars and entertainment in Manchester.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you take us to Liverpool for the evening?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Longer-distance private hire can be quoted for Liverpool
                and other destinations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you collect us later the same night?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Return transport can be included in the booking.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                What information do you need for a quote?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Send us your pickup location, destination, travel date,
                passenger numbers, outward time and expected return time.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Group Night Out Minibus Quote
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Tell us where your group is travelling from, where you are going,
            the date, passenger numbers and expected return time and we can
            prepare a quotation.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-7 py-3 rounded font-semibold"
            >
              Request a Night Out Quote
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
