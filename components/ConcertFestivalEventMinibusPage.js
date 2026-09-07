import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl, gmbUrl } from './utils';

export default function ConcertFestivalEventMinibusPage() {
  const canonical =
    `${siteUrl}/services/concert-festival-event-minibus-hire`;

  const title =
    'Concert & Festival Minibus Hire | 16-Seater With Driver | Oakdale Travel';

  const description =
    'Concert, festival and event minibus hire with a driver from Bolton, Wigan, Manchester and the North West. 16-seater group transport with return journeys available.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#event-minibus-hire`,
      name: 'Concert, Festival and Event Minibus Hire',
      serviceType: 'Concert, festival and event minibus transport with driver',
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
          name: 'Concert, Festival & Event Minibus Hire',
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
          <span>Concert, Festival &amp; Event Minibus Hire</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Concert, Festival &amp; Event Minibus Hire
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Oakdale Travel provides 16-seater minibus hire with a driver for
            concerts, festivals and major events from Bolton, Wigan,
            Manchester and surrounding areas.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Whether your group is heading to a concert in Manchester, a
            weekend festival or another major event, we can arrange
            pre-booked outward and return transport so everyone can travel
            together.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded font-semibold"
            >
              Get an Event Quote
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
              alt="Oakdale Travel 16-seater minibus for concerts festivals and events"
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
                Your booking includes a professional driver.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Concerts &amp; Festivals
              </h2>

              <p className="mt-2 text-gray-700">
                Private group transport for music events and festivals.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Return Travel
              </h2>

              <p className="mt-2 text-gray-700">
                Pre-book your journey home after the event.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Concert Minibus Hire
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Concert nights are much easier when the group already knows how it
            is getting there and back. Instead of arranging several cars,
            parking spaces or separate taxis, your group can travel together
            in one private minibus.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We can arrange transport for concerts and live events in
            Manchester and other UK destinations, with a collection point and
            return time agreed when booking.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Co-op Live Minibus Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Groups travelling to concerts and events at Co-op Live can book
              a private minibus with a driver for both the outward journey and
              collection afterwards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              AO Arena Minibus Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              We can provide group transport to events at Manchester&apos;s
              AO Arena, with pickup from Bolton, Wigan, Manchester and
              surrounding areas.
            </p>
          </div>

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Festival Minibus Hire
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel also provides group minibus transport for
            festivals. This can be particularly useful when a group wants to
            travel together without relying on several cars, public transport
            or separate taxis.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Festival journeys can include day events, weekend festivals and
            music events across the North West and elsewhere in the UK.
            Outward and return journeys can be discussed when requesting your
            quote.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Parklife Festival Transport
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Group minibus transport can be arranged for Parklife and other
              large Manchester music events. Booking the return journey in
              advance means your group already has transport arranged once the
              event finishes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Creamfields Festival Transport
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              We can quote for group transport to Creamfields in Cheshire,
              including outward travel and an agreed return collection where
              suitable for the booking.
            </p>
          </div>

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Leeds Festival &amp; Other UK Festivals
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Longer-distance festival journeys can also be arranged, including
            transport to Leeds Festival and other music festivals throughout
            the UK.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Send us the festival or event, date, passenger numbers, pickup
            location and expected return requirements and we can assess the
            journey.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Event Minibus Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our service is not limited to music events. Minibus transport
              can also be arranged for exhibitions, shows, entertainment
              events, large gatherings and other ticketed occasions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Minibus With Driver for Events
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Your booking includes a driver, allowing everybody in the group
              to enjoy the event without somebody needing to drive.
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
            16-Seater Concert &amp; Festival Minibus
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Our 16-seater minibus is suitable for groups travelling to
            concerts, festivals and events together. Smaller groups can also
            request a quote, so you do not need exactly 16 passengers to use
            the service.
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

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Concert &amp; Festival Transport From Bolton, Wigan &amp; Manchester
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel is based in Bolton and provides private event
            transport from Bolton, Wigan, Manchester and surrounding areas.
            Longer-distance journeys to events elsewhere in the UK can also
            be discussed.
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
            Getting Home After a Concert or Festival
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            One of the biggest benefits of arranging transport in advance is
            knowing how your group will get home after the event. A return
            collection can be included as part of your booking rather than
            relying on finding several vehicles once crowds begin leaving.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Event finishing times and pickup arrangements should be discussed
            before the journey so we can plan the booking properly.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            A Genuine Festival Customer Review
          </h2>

          <div className="mt-6 max-w-3xl border border-gray-200 rounded-lg p-6">
            <div
              className="text-lg font-semibold"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </div>

            <blockquote className="mt-4 leading-7 text-gray-700">
              “Absolutely fantastic service. After our festival&apos;s poorly
              organised pickup service, our driver Abdullah went above and
              beyond to ensure we all got home safely and smoothly. He chose a
              great pickup location that was easiest for us to reach and his
              communication throughout was excellent.”
            </blockquote>

            <p className="mt-4 font-semibold">
              I T
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
            Concert, Festival &amp; Event Minibus Hire FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Does concert and festival minibus hire include a driver?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides private event minibus hire with a
                driver.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                How many passengers can your event minibus carry?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Our main minibus can carry groups of up to 16 passengers.
                Smaller groups can also request a quote.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you take us to Co-op Live or AO Arena?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. We can provide pre-booked group transport for events at
                Co-op Live, AO Arena and other Manchester venues.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do you provide festival transport?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. We can quote for festival transport including Parklife,
                Creamfields, Leeds Festival and other UK festivals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you pick us up after the concert or festival?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Return transport can be arranged as part of your booking.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                What information do you need for a quote?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Send us the event or festival, travel date, pickup location,
                passenger numbers, required departure time and expected return
                requirements.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Concert, Festival or Event Minibus Quote
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Tell us where your group is travelling from, the event or festival,
            travel date, passenger numbers and return plans and we can prepare
            a quotation.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-7 py-3 rounded font-semibold"
            >
              Request an Event Quote
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
