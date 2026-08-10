import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl, gmbUrl } from './utils';

export default function WiganAreaPage() {
  const canonical = `${siteUrl}/areas/wigan`;

  const title =
    'Minibus Hire Wigan | 16-Seater With Driver | Oakdale Travel';

  const description =
    'Reliable minibus hire in Wigan with a driver. 16-seater transport for airports, weddings, events, schools, days out and group travel. Get a quote.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#minibus-hire`,
      name: 'Minibus Hire Wigan',
      serviceType: 'Minibus hire with driver',
      url: canonical,
      provider: {
        '@type': 'Organization',
        name: 'Oakdale Travel',
        url: siteUrl,
      },
      areaServed: {
        '@type': 'City',
        name: 'Wigan',
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
          name: 'Wigan',
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
          <span>Wigan</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Minibus Hire Wigan – 16-Seater Minibus With Driver
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Oakdale Travel provides reliable minibus hire in Wigan for
            families, groups, schools, businesses and organisations. Our
            16-seater minibus hire includes a professional driver and can be
            booked for airport transfers, weddings, sporting events, days out,
            school transport, private journeys and regular contract work.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            We serve Wigan from our Bolton base and provide both local
            journeys and longer-distance group transport across the North
            West and the UK. Tell us your pickup location, destination,
            travel date, passenger numbers and journey times and we can
            prepare a quotation for your requirements.
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
              src="/fleet/ford-transit-2015-exterior-side.webp"
              alt="Oakdale Travel 16-seater minibus available for hire in Wigan with driver"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <p className="mt-3 text-sm text-gray-600">
            One of Oakdale Travel&apos;s minibuses used for private hire,
            airport transfers, events, school journeys and contract transport.
          </p>
        </section>

        <section className="mt-10 border-y border-gray-200 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <h2 className="text-lg font-bold">Wigan Area Coverage</h2>
              <p className="mt-2 text-gray-700">
                Group transport throughout Wigan and surrounding communities
                for private and regular journeys.
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
                Transport for airports, weddings, sporting events, concerts,
                days out and family occasions.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">School &amp; Contract Work</h2>
              <p className="mt-2 text-gray-700">
                Experience providing regular transport for schools, councils
                and organisations.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Minibus Hire Across Wigan
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We provide pickups across Wigan and nearby areas including Wigan
            town centre, Standish, Orrell, Pemberton, Shevington, Hindley and
            Ashton-in-Makerfield. Depending on the booking, we can arrange one
            main pickup point or multiple collection points where practical.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Journeys can include local travel within Greater Manchester as
            well as transport to airports, event venues, weddings, football
            matches, race days, family occasions and destinations elsewhere
            in the UK.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              16-Seater Minibus Hire Wigan
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our 16-seater minibus is suited to groups that want to travel
              together rather than organising several separate cars or taxis.
              Your booking includes a driver, allowing the group to travel
              together from the agreed collection point to the destination.
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
              Minibus Hire With Driver in Wigan
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Oakdale Travel provides minibus hire with a professional driver,
              so no passenger in your group needs to drive the vehicle.
              Outbound and return journeys can both be arranged when required.
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
            Wigan Airport Minibus Transfers
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We provide group airport transfers from Wigan, including journeys
            to Manchester Airport, Liverpool John Lennon Airport and Leeds
            Bradford Airport. A minibus allows the group to travel together
            rather than arranging several cars, parking bookings or separate
            taxis.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            When requesting your quote, provide your flight times, passenger
            numbers and expected luggage so we can properly assess the
            transport requirements.
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
              Weddings, Events and Days Out
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              We provide private minibus transport for weddings, concerts,
              sporting events, race days, family occasions, nights out and
              group days out. Return transport can be arranged so your group
              has the journey home organised in advance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              School and Contract Transport
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Oakdale Travel also provides school and regular contract
              transport. Drivers working on relevant services are DBS checked,
              and transport requirements for schools, councils and
              organisations can be discussed directly with us.
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
                “Absolutely fantastic service. Our driver went above and
                beyond to ensure we all got home safely and smoothly. His
                communication throughout was excellent.”
              </blockquote>

              <p className="mt-4 font-semibold">I T</p>
              <p className="text-sm text-gray-600">Google review</p>
            </article>

            <article className="border border-gray-200 rounded-lg p-6">
              <div className="text-lg font-semibold" aria-label="5 out of 5 stars">
                ★★★★★
              </div>

              <blockquote className="mt-4 leading-7 text-gray-700">
                “Abdullah provided a great service with a nice and clean
                minibus, great customer service, will definitely use again.”
              </blockquote>

              <p className="mt-4 font-semibold">Tracy Conneely Loftus</p>
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
            Minibus Hire Wigan FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Does your Wigan minibus hire include a driver?
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
                16 passengers. Tell us about any substantial luggage when
                requesting your quotation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do you provide Wigan to Manchester Airport transfers?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. We provide group transfers from Wigan to Manchester
                Airport as well as Liverpool John Lennon Airport and Leeds
                Bradford Airport.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can I book a return journey?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Provide both your outward and return dates and times when
                requesting your quotation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Which parts of Wigan do you cover?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                We provide pickups across Wigan and surrounding communities
                including Standish, Orrell, Pemberton, Shevington, Hindley and
                Ashton-in-Makerfield.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Minibus Hire Quote in Wigan
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
