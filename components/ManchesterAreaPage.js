import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl, gmbUrl } from './utils';

export default function ManchesterAreaPage() {
  const canonical = `${siteUrl}/areas/manchester`;

  const title =
    'Minibus Hire Manchester | 16-Seater With Driver | Oakdale Travel';

  const description =
    'Minibus hire in Manchester with a driver. 16-seater transport for concerts, football, sporting events, weddings, nights out, family travel, day trips, airports and group journeys.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#minibus-hire`,
      name: 'Minibus Hire Manchester',
      serviceType: 'Minibus hire with driver',
      url: canonical,
      provider: {
        '@type': 'Organization',
        name: 'Oakdale Travel',
        url: siteUrl,
      },
      areaServed: {
        '@type': 'City',
        name: 'Manchester',
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
          name: 'Areas',
          item: `${siteUrl}/areas`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Manchester',
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
          <Link href="/areas" className="underline">
            Areas
          </Link>
          {' / '}
          <span>Manchester</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Minibus Hire Manchester – 16-Seater Minibus With Driver
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Oakdale Travel provides 16-seater minibus hire with a driver in
            Manchester for private groups, families, businesses, schools and
            organisations.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            We provide group transport for concerts and festivals, football
            and sporting events, weddings, family occasions, nights out, day
            trips, airport transfers and longer-distance private journeys
            across the UK.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Manchester is served from our Bolton base. Tell us your pickup
            location, destination, travel date, passenger numbers and journey
            times and we can prepare a quotation based on your requirements.
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
              View 16-Seater Minibus Hire
            </Link>
          </div>
        </section>

        <section className="mt-10 max-w-3xl">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/fleet/ford-transit-2015-exterior-front.webp"
              alt="Oakdale Travel 16-seater minibus available for hire in Manchester with driver"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <p className="mt-3 text-sm text-gray-600">
            One of Oakdale Travel&apos;s 16-seater minibuses used for private
            group transport, events, airport journeys and other pre-booked
            travel.
          </p>
        </section>

        <section className="mt-10 border-y border-gray-200 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <h2 className="text-lg font-bold">
                Manchester Coverage
              </h2>

              <p className="mt-2 text-gray-700">
                Group transport across Manchester and surrounding areas for
                private and pre-booked journeys.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                16-Seater With Driver
              </h2>

              <p className="mt-2 text-gray-700">
                Driver-operated minibus transport for groups of up to
                16 passengers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Concert &amp; Sporting Event Travel
              </h2>

              <p className="mt-2 text-gray-700">
                Group transport for concerts, football matches, sporting
                events and major entertainment venues.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Private Group Hire
              </h2>

              <p className="mt-2 text-gray-700">
                Transport for weddings, nights out, family occasions, days
                out and other private journeys.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Minibus Hire Across Manchester
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We provide minibus pickups across Manchester including the city
            centre, Ancoats, Hulme, Rusholme, Fallowfield, Withington,
            Didsbury and Chorlton.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Depending on the booking, we can arrange one main pickup point or
            discuss multiple collections where practical. Journeys can include
            travel within Greater Manchester as well as longer-distance group
            transport elsewhere in the UK.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              16-Seater Minibus Hire Manchester
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our 16-seater minibus is suitable for groups that want to travel
              together rather than organising several separate cars or taxis.
              Your booking includes a driver and smaller groups can also
              request a quotation.
            </p>

            <p className="mt-4">
              <Link
                href="/services/minibus-hire-16-seater"
                className="underline font-semibold"
              >
                View our 16-seater minibus service
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Minibus Hire With Driver Manchester
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our Manchester minibus hire includes a driver, so nobody in your
              group needs to drive. Outward and return journeys can both be
              arranged in advance.
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

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold">
            Popular Private Minibus Hire in Manchester
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Manchester is a major destination for concerts, sport, nightlife,
            weddings and other events. We also provide pickups from Manchester
            for private journeys to destinations elsewhere in the North West
            and across the UK.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold">
                Concert &amp; Festival Minibus Hire
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Private group transport for Manchester concerts, festivals,
                entertainment venues and major events, with return travel
                available.
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
                Minibus transport for supporters travelling to football,
                rugby and other major sporting events in and around
                Manchester.
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
                Group Nights Out
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Private transport for restaurants, birthdays, bars,
                celebrations and evenings out across Manchester.
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

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold">
                Wedding Minibus Hire
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Group transport for wedding guests travelling between homes,
                hotels, ceremonies, receptions and wedding venues.
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
                Family &amp; Group Private Hire
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Private minibus transport for birthdays, family gatherings,
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
                Group transport from Manchester for attractions, sightseeing,
                seaside trips, family days out and UK excursions.
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
                Race Day Minibus Hire
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Private transport for Manchester groups travelling to
                Haydock, Aintree, York, Chester and other UK racecourses.
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

          </div>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Manchester Concert &amp; Event Transport
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Manchester attracts groups for concerts, festivals, exhibitions
              and major entertainment events throughout the year. We provide
              pre-booked minibus transport for outward and return journeys so
              the group can travel together.
            </p>

            <p className="mt-4">
              <Link
                href="/services/concert-festival-event-minibus-hire"
                className="underline font-semibold"
              >
                Explore concert &amp; festival minibus hire
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Manchester Football &amp; Sporting Events
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Private minibus hire can be arranged for supporters travelling
              to football matches, rugby fixtures and other sporting events,
              with return transport organised as part of the booking.
            </p>

            <p className="mt-4">
              <Link
                href="/services/sporting-event-match-day-minibus-hire"
                className="underline font-semibold"
              >
                Explore match day &amp; sporting event transport
              </Link>
            </p>
          </div>

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Manchester Airport Minibus Transfers
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We also provide group transport to and from Manchester Airport for
            families, friends, businesses and organised groups.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            When requesting your quote, provide your passenger numbers,
            flight times and expected luggage so we can assess the journey
            requirements properly. Return airport collections can also be
            arranged.
          </p>

          <p className="mt-4">
            <Link
              href="/services/airport-transfers-manchester,-liverpool,-leeds-bradford"
              className="underline font-semibold"
            >
              View our airport transfer service
            </Link>
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Weddings &amp; Private Group Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              We provide minibus transport for weddings, family celebrations,
              birthdays, nights out, group days out and other private
              occasions across Manchester and beyond.
            </p>

            <p className="mt-4">
              <Link
                href="/services/wedding-transport-hire"
                className="underline font-semibold"
              >
                View wedding minibus hire
              </Link>
            </p>

            <p className="mt-3">
              <Link
                href="/services/private-hire-for-family-events"
                className="underline font-semibold"
              >
                View family &amp; group private hire
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              School &amp; Contract Transport
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Oakdale Travel also provides school and regular contract
              transport. Drivers working on relevant services are DBS checked,
              and requirements for schools, councils and organisations can be
              discussed directly with us.
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
            What Our Customers Say
          </h2>

          <p className="mt-2 max-w-4xl text-gray-700">
            Genuine feedback from customers who have travelled with Oakdale
            Travel.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <article className="border border-gray-200 rounded-lg p-6">
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
            </article>

            <article className="border border-gray-200 rounded-lg p-6">
              <div
                className="text-lg font-semibold"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>

              <blockquote className="mt-4 leading-7 text-gray-700">
                “Excellent service, our driver Abdullah was very punctual and
                friendly. Will definitely be using their services again, whole
                process was very smooth and easy.”
              </blockquote>

              <p className="mt-4 font-semibold">
                Freya Cameron
              </p>

              <p className="text-sm text-gray-600">
                Google review
              </p>
            </article>

          </div>

          <p className="mt-6">
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
            Why Choose Oakdale Travel for Minibus Hire in Manchester?
          </h2>

          <ul className="mt-6 space-y-3 max-w-4xl list-disc pl-6 text-gray-700">
            <li>16-seater minibus hire with a driver.</li>
            <li>Manchester pickups for private group journeys.</li>
            <li>Concert, festival and sporting event transport.</li>
            <li>Wedding, family and nights-out private hire.</li>
            <li>Outward and return journeys available.</li>
            <li>Airport and longer-distance group transport.</li>
            <li>
              Clear quotations based on your actual journey requirements.
            </li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Minibus Hire Manchester FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Does your Manchester minibus hire include a driver?
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
                Smaller groups can also request a quotation. Tell us about
                substantial luggage when requesting your quote.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can I hire a minibus for a Manchester concert or football match?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. We provide pre-booked group transport for concerts,
                festivals, football matches, rugby fixtures and other major
                sporting or entertainment events.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do you provide minibus hire for Manchester nights out?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Private minibus hire can be arranged for restaurants,
                birthdays, celebrations and evenings out, including return
                transport where required.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do you provide Manchester Airport minibus transfers?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. We provide group transport to and from Manchester Airport
                and can arrange both outward and return journeys.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Which parts of Manchester do you cover?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                We provide pickups across Manchester including the city
                centre, Ancoats, Hulme, Rusholme, Fallowfield, Withington,
                Didsbury and Chorlton, as well as surrounding areas.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Minibus Hire Quote in Manchester
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
