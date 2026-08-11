import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl, gmbUrl } from './utils';

export default function ManchesterAreaPage() {
  const canonical = `${siteUrl}/areas/manchester`;

  const title =
    'Minibus Hire Manchester | 16-Seater With Driver | Oakdale Travel';

  const description =
    'Reliable minibus hire in Manchester with a driver. 16-seater transport for airports, events, weddings, business travel, schools and group journeys.';

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

        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-6">
          <Link href="/" className="underline">Home</Link>
          {' / '}
          <Link href="/areas" className="underline">Areas</Link>
          {' / '}
          <span>Manchester</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Minibus Hire Manchester – 16-Seater Minibus With Driver
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Oakdale Travel provides reliable minibus hire in Manchester for
            families, groups, businesses, schools and organisations. Our
            16-seater minibus hire includes a professional driver and is
            available for airport transfers, concerts, sporting events,
            weddings, corporate travel, days out, school journeys and private
            group transport.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            We serve Manchester from our Bolton base and provide transport
            across the city, Greater Manchester and destinations throughout
            the UK. Tell us your pickup location, destination, travel date,
            passenger numbers and journey times and we can prepare a quotation
            for your requirements.
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
            One of Oakdale Travel&apos;s minibuses used for Manchester group
            transport, airport transfers, events and private hire.
          </p>
        </section>

        <section className="mt-10 border-y border-gray-200 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <h2 className="text-lg font-bold">Manchester Coverage</h2>
              <p className="mt-2 text-gray-700">
                Group transport across Manchester for private, business,
                airport and regular journeys.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">16-Seater With Driver</h2>
              <p className="mt-2 text-gray-700">
                Driver-operated minibus transport for groups of up to
                16 passengers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">Airport &amp; Event Travel</h2>
              <p className="mt-2 text-gray-700">
                Transport for Manchester Airport, concerts, sporting events,
                weddings and group occasions.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">Business &amp; Contract Hire</h2>
              <p className="mt-2 text-gray-700">
                Group transport for businesses, schools, organisations and
                regular contract requirements.
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
            Didsbury and Chorlton. Depending on the booking, we can arrange
            one main pickup point or multiple collections where practical.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Journeys can include travel within Greater Manchester as well as
            airport transfers, concerts, football matches, weddings,
            conferences, family occasions and longer-distance group travel
            elsewhere in the UK.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              16-Seater Minibus Hire Manchester
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our 16-seater minibus is suitable for groups that want to travel
              together rather than organising several cars or taxis. Your
              booking includes a driver, allowing the group to travel from the
              agreed pickup point directly to the destination.
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
              Our Manchester minibus hire includes a professional driver, so
              nobody in your group needs to drive. This can be particularly
              useful for events, evenings out, airport journeys and occasions
              where return transport needs to be arranged in advance.
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
            Manchester Airport Minibus Transfers
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We provide group transport to and from Manchester Airport for
            families, friends, businesses and organised groups. Travelling
            together by minibus can remove the need for several cars, multiple
            parking bookings or separate taxis.
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
              Concerts, Football and Events
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Manchester attracts groups for concerts, football fixtures,
              sporting events, exhibitions and major events throughout the
              year. We provide pre-booked minibus transport for both outward
              and return journeys, helping your group travel together.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Corporate and Business Travel
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Businesses can use our minibus service for group transport to
              meetings, conferences, hotels, events, airports and other
              business destinations across Manchester and the North West.
            </p>
          </div>

        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Weddings and Private Group Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              We provide minibus transport for weddings, family celebrations,
              nights out, group days out and other private occasions.
              Outbound and return journeys can both be arranged when required.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              School and Contract Transport
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
            Genuine feedback from customers who have travelled with
            Oakdale Travel.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <article className="border border-gray-200 rounded-lg p-6">
              <div className="text-lg font-semibold" aria-label="5 out of 5 stars">
                ★★★★★
              </div>

              <blockquote className="mt-4 leading-7 text-gray-700">
                “Ordered for a return service to the grand final at Old
                Trafford. The driver was amazing and didn&apos;t mind waiting
                for our friend who was running late. Great communication as to
                where he would pick us up, bus was very spacious and spotless.”
              </blockquote>

              <p className="mt-4 font-semibold">Danielle Molloy</p>
              <p className="text-sm text-gray-600">Google review</p>
            </article>

            <article className="border border-gray-200 rounded-lg p-6">
              <div className="text-lg font-semibold" aria-label="5 out of 5 stars">
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
            Minibus Hire Manchester FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Does your Manchester minibus hire include a driver?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides minibus hire with a professional
                driver.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                How many passengers can your minibus carry?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Our main minibus service accommodates groups of up to
                16 passengers. Tell us about substantial luggage when
                requesting your quotation.
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
                Can I hire a minibus for a Manchester event?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. We provide transport for concerts, football matches,
                weddings, business events, family occasions and other
                pre-booked group journeys.
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
            times, passenger numbers and any luggage requirements and we can
            prepare a quotation for your journey.
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
