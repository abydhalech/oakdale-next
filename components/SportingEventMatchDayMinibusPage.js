import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl, gmbUrl } from './utils';

export default function SportingEventMatchDayMinibusPage() {
  const canonical =
    `${siteUrl}/services/sporting-event-match-day-minibus-hire`;

  const title =
    'Match Day & Sporting Event Minibus Hire | 16-Seater | Oakdale Travel';

  const description =
    'Match day and sporting event minibus hire with a driver from Bolton, Wigan, Manchester and the North West. 16-seater group transport for football, rugby and major sporting events.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#sporting-event-minibus-hire`,
      name: 'Match Day and Sporting Event Minibus Hire',
      serviceType: 'Sporting event and match day minibus transport with driver',
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
          name: 'Match Day & Sporting Event Minibus Hire',
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
          <span>Match Day &amp; Sporting Event Minibus Hire</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Match Day &amp; Sporting Event Minibus Hire
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Oakdale Travel provides 16-seater minibus hire with a driver for
            football matches, rugby fixtures and other sporting events from
            Bolton, Wigan, Manchester and surrounding areas.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Whether you are travelling with friends, family or a larger group
            of supporters, we can arrange pre-booked outward and return
            transport so everybody can travel to the event together.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded font-semibold"
            >
              Get a Match Day Quote
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
              alt="Oakdale Travel 16-seater minibus for match day and sporting event transport"
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
                Group match day transport for up to 16 passengers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Driver Included
              </h2>
              <p className="mt-2 text-gray-700">
                Your sporting event booking includes a professional driver.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Supporter Groups
              </h2>
              <p className="mt-2 text-gray-700">
                Travel together instead of arranging several cars or taxis.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Return Travel
              </h2>
              <p className="mt-2 text-gray-700">
                Arrange your collection after the match or event in advance.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Football Match Minibus Hire
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Football fixtures often involve busy roads, limited parking and
            large crowds arriving and leaving at similar times. Pre-booked
            minibus transport gives your group one agreed journey to the match
            and the option of arranging return transport afterwards.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We can quote for league matches, cup fixtures, finals, friendly
            matches and other football events across Greater Manchester and
            elsewhere in the UK.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Old Trafford Minibus Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Oakdale Travel has previously transported customers to major
              events at Old Trafford. Groups can arrange an outward journey
              and return collection rather than travelling in several
              separate vehicles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Etihad Stadium Minibus Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Group transport can be arranged for football fixtures and other
              sporting events at the Etihad Stadium, with collections
              available from Bolton, Wigan, Manchester and surrounding areas.
            </p>
          </div>

        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Bolton Match Day Transport
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              As a Bolton-based operator, we can provide group minibus
              transport for local football and sporting events, including
              journeys to Bolton&apos;s football stadium and other venues
              across the area.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Wigan Match Day Transport
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Minibus transport can also be arranged for football, rugby and
              sporting events in Wigan, including group journeys to major
              local fixtures and events.
            </p>
          </div>

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Rugby &amp; Other Sporting Event Minibus Hire
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Our sporting event transport is not limited to football. We can
            also quote for rugby fixtures, boxing events, cricket, major
            sporting competitions and other ticketed sporting occasions.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Tell us the venue, event date, pickup location, passenger numbers
            and expected return time and we can assess the journey.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              16-Seater Match Day Minibus
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our 16-seater minibus is suitable for groups travelling to
              matches and sporting events together. Smaller groups can also
              request a quote, so you do not need exactly 16 passengers.
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
              Sporting Event Minibus With Driver
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Your booking includes a driver, meaning nobody in your group
              needs to drive to the stadium or arrange parking for their own
              vehicle.
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
            Sporting Event Transport From Bolton, Wigan &amp; Manchester
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel is based in Bolton and provides sporting event
            minibus hire from Bolton, Wigan, Manchester and surrounding
            areas. Longer-distance journeys to matches and sporting events
            elsewhere in the UK can also be discussed.
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
            Why Book a Minibus for Match Day?
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Travel Together
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Your group can travel to the fixture together rather than
                coordinating several vehicles.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Less Parking to Arrange
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                A driver-operated minibus reduces the need for multiple group
                members to find parking around the venue.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Return Journey Booked
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Arrange your transport home before the event rather than
                trying to organise several journeys once the fixture finishes.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Private Group Transport
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                The vehicle is booked for your group and journey requirements.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            A Genuine Sporting Event Customer Review
          </h2>

          <div className="mt-6 max-w-3xl border border-gray-200 rounded-lg p-6">
            <div
              className="text-lg font-semibold"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </div>

            <blockquote className="mt-4 leading-7 text-gray-700">
              “Ordered for a return service to the grand final at Old
              Trafford. The driver was amazing and didn&apos;t mind waiting
              for our friend who was running late. Great communication as to
              where he would pick us up, bus was very spacious and spotless.”
            </blockquote>

            <p className="mt-4 font-semibold">
              Danielle Molloy
            </p>

            <p className="text-sm text-gray-600">
              Google review
            </p>
          </div>

          <p className="mt-5">
            <a
              href={gmbUrl}
              target="_blank"
              rel="noreferrer"
              className="underline font-semibold"
            >
              Read all Google reviews
            </a>
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Match Day &amp; Sporting Event Minibus FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Does match day minibus hire include a driver?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides match day and sporting event
                minibus hire with a driver.
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
                Can you provide minibus transport to Old Trafford?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. We have previously provided return transport for
                customers attending a major sporting event at Old Trafford.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you take us to the Etihad Stadium?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Group transport can be arranged for football fixtures
                and events at the Etihad Stadium.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do you only provide football transport?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                No. We can also quote for rugby, boxing, cricket and other
                sporting events.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you collect us after the match?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Return transport can be included as part of your booking.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Sporting Event Minibus Quote
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Tell us the sporting event, venue, travel date, pickup location,
            passenger numbers and return plans and we can prepare a quotation
            for your group.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-7 py-3 rounded font-semibold"
            >
              Request a Match Day Quote
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
