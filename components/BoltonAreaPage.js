import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl, gmbUrl } from './utils';

export default function BoltonAreaPage() {
  const canonical = `${siteUrl}/areas/bolton`;

  const title =
    'Minibus Hire Bolton | 16-Seater With Driver | Oakdale Travel';

  const description =
    'Reliable minibus hire in Bolton with a driver. 16-seater transport for airport transfers, schools, weddings, events and contracts. Get a fast quote.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#minibus-hire`,
      name: 'Minibus Hire Bolton',
      serviceType: 'Minibus hire with driver',
      url: canonical,
      provider: {
        '@type': 'Organisation',
        name: 'Oakdale Travel',
        url: siteUrl,
      },
      areaServed: {
        '@type': 'City',
        name: 'Bolton',
      },
    },
  ];

  return (
    <Layout seoProps={{ title, description, canonical, jsonLd }}>
      <main className="max-w-6xl mx-auto px-5 py-10 md:py-14">

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
          <span>Bolton</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Minibus Hire Bolton – 16-Seater Minibus With Driver
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Oakdale Travel provides reliable minibus hire in Bolton for
            groups, families, schools, businesses and organisations. Our
            16-seater minibus hire includes a professional driver, making it
            easy to arrange group transport from Bolton to airports, events,
            schools, weddings, sporting fixtures and destinations across the
            North West and the UK.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Based in Bolton, we regularly provide both pre-booked private
            journeys and contract transport. Whether you need a one-off
            minibus for a family trip or regular transport for a school or
            organisation, we can provide a quotation based on your pickup
            point, destination, dates, passenger numbers and journey
            requirements.
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
                <div className="mt-10 max-w-3xl">
  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
    <Image
      src="/fleet/ford-transit-2015-exterior-front.webp"
      alt="Oakdale Travel 16-seater Ford Transit minibus for hire in Bolton"
      fill
      priority
      sizes="(max-width: 768px) 100vw, 900px"
      className="object-cover"
    />
  </div>

  <p className="mt-3 text-sm text-gray-600">
    One of Oakdale Travel&apos;s minibuses used for group transport, school
    journeys, airport transfers and private hire.
  </p>
</div>
      <section className="mt-10 border-y border-gray-200 py-8">
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

    <div>
      <h2 className="text-lg font-bold">Bolton-Based Operator</h2>
      <p className="mt-2 text-gray-700">
        Based in Bolton and providing minibus transport across the borough,
        Greater Manchester and the North West.
      </p>
    </div>

    <div>
      <h2 className="text-lg font-bold">16-Seater With Driver</h2>
      <p className="mt-2 text-gray-700">
        Group minibus hire with a professional driver for private,
        airport, school and contract journeys.
      </p>
    </div>

    <div>
      <h2 className="text-lg font-bold">School &amp; Contract Experience</h2>
      <p className="mt-2 text-gray-700">
        Experience providing regular transport for schools, councils
        and organisations, with DBS-checked drivers where required.
      </p>
    </div>

    <div>
  <h2 className="text-lg font-bold">Private &amp; Contract Hire</h2>
  <p className="mt-2 text-gray-700">
    Transport for airport journeys, events, schools, organisations and
    regular contract requirements.
  </p>
</div>

  </div>
</section>
          <section className="mt-12">
  <div className="flex flex-wrap items-end justify-between gap-4">
    <div>
      <h2 className="text-2xl md:text-3xl font-bold">
        What Our Customers Say
      </h2>
      <p className="mt-2 text-gray-700">
        Genuine feedback from customers who have travelled with Oakdale Travel.
      </p>
    </div>

    <a
      href={gmbUrl}
      target="_blank"
      rel="noreferrer"
      className="underline font-semibold"
    >
      Read all Google reviews
    </a>
  </div>

  <div className="mt-8 grid gap-6 md:grid-cols-3">

    <article className="border border-gray-200 rounded-lg p-6">
      <div
        className="text-lg font-semibold"
        aria-label="5 out of 5 stars"
      >
        ★★★★★
      </div>

      <blockquote className="mt-4 leading-7 text-gray-700">
        “Fantastic service all inc. trip to Haydock races for music event and
        evening races. Abdullah is a lovely guy and communication was
        brilliant. Top guy, professional friendly service. 100% recommend to
        anyone.”
      </blockquote>

      <p className="mt-4 font-semibold">Angela Kelsall</p>
      <p className="text-sm text-gray-600">Google review</p>
    </article>

    <article className="border border-gray-200 rounded-lg p-6">
      <div
        className="text-lg font-semibold"
        aria-label="5 out of 5 stars"
      >
        ★★★★★
      </div>

      <blockquote className="mt-4 leading-7 text-gray-700">
        “Ordered for a return service to the grand final at Old Trafford.
        The driver was amazing and didn’t mind waiting for our friend who was
        running late. Great communication as to where he would pick us up,
        bus was very spacious and spotless.”
      </blockquote>

      <p className="mt-4 font-semibold">Danielle Molloy</p>
      <p className="text-sm text-gray-600">Google review</p>
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

      <p className="mt-4 font-semibold">Freya Cameron</p>
      <p className="text-sm text-gray-600">Google review</p>
    </article>

  </div>
</section>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Minibus Hire for Groups Across Bolton
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We provide minibus transport throughout Bolton and surrounding
            areas including Bolton town centre, Farnworth, Horwich,
            Westhoughton, Little Lever, Bromley Cross, Heaton, Lostock,
            Kearsley and Blackrod. We can collect your group from one location
            or arrange multiple pickup points where this is practical for the
            journey.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Popular journeys include transport to Manchester Airport,
            Liverpool John Lennon Airport, sporting events, race days,
            weddings, family occasions, school journeys and group days out.
            We also provide longer-distance transport from Bolton to
            destinations elsewhere in the UK.
          </p>
        </section>

        <section className="mt-14 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">
              16-Seater Minibus Hire in Bolton
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our 16-seater minibus service is suited to groups that want to
              travel together without organising several cars or taxis. Your
              journey includes a driver, so your group can be collected in
              Bolton and transported directly to the destination.
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
              Bolton Airport Minibus Transfers
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Travelling to the airport as a group can quickly become
              complicated when several cars, parking bookings and separate
              arrival times are involved. We provide group airport transfers
              from Bolton, including journeys to Manchester Airport,
              Liverpool John Lennon Airport and Leeds Bradford Airport.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              When requesting a quote, tell us your flight times, passenger
              numbers and how much luggage you expect to bring so we can
              assess the journey properly.
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
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            School and Contract Transport in Bolton
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel also provides school and contract transport. Our
            experience includes regular school journeys as well as transport
            requirements for councils and organisations. Drivers working on
            relevant services are DBS checked, and journeys are planned around
            the individual requirements of the contract or booking.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We understand that regular transport depends on reliability,
            communication and consistent journey planning. Schools,
            organisations and commissioners looking for recurring minibus
            transport in Bolton can contact us to discuss their requirements.
          </p>

          <p className="mt-4">
            <Link
              href="/services/school-transport-services"
              className="underline font-semibold"
            >
              Read about our school transport services
            </Link>
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Minibus Hire for Weddings, Events and Days Out
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We also provide private minibus hire for weddings, sporting
            events, concerts, race days, family occasions and group days out.
            Bolton customers regularly travel to venues throughout Greater
            Manchester, Lancashire, Merseyside and further afield.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Local journeys can include Bolton town centre and venues around
            the borough, while longer bookings may include Manchester city
            centre, football fixtures, airports and major event destinations.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Choose Oakdale Travel for Minibus Hire in Bolton?
          </h2>

          <ul className="mt-6 space-y-3 max-w-4xl list-disc pl-6 text-gray-700">
            <li>Bolton-based transport operator.</li>
            <li>16-seater minibus hire with a driver.</li>
            <li>DBS-checked drivers for relevant transport services.</li>
            <li>School, contract and private hire experience.</li>
            <li>Airport, event and longer-distance group transport.</li>
            <li>Clear quotations based on your actual journey requirements.</li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Frequently Asked Questions About Minibus Hire in Bolton
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">
            <div>
              <h3 className="text-xl font-semibold">
                Does your Bolton minibus hire include a driver?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides minibus hire with a driver. Tell
                us where you need collecting from, your destination, travel
                dates and passenger numbers when requesting a quote.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                How many passengers can your minibus carry?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Our main minibus service accommodates groups of up to 16
                passengers. If you are travelling with substantial luggage,
                include this when requesting your quotation so the journey can
                be assessed correctly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do you provide minibus transfers from Bolton to Manchester Airport?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Manchester Airport transfers are one of the journeys we
                provide from Bolton. We can also quote for Liverpool John
                Lennon Airport and Leeds Bradford Airport.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can I hire a minibus for a return journey?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. When requesting your quote, provide both your outward and
                return dates and times so we can price the complete booking.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Which parts of Bolton do you cover?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                We provide pickups across Bolton and surrounding areas,
                including Farnworth, Horwich, Westhoughton, Little Lever,
                Bromley Cross, Heaton, Lostock, Kearsley and Blackrod.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Minibus Hire Quote in Bolton
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            For an accurate quote, send us your pickup location, destination,
            travel date, required times, passenger count and any luggage or
            additional journey requirements.
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

      </main>
    </Layout>
  );
}
