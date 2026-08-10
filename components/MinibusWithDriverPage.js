import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl } from './utils';

export default function MinibusWithDriverPage() {
  const canonical = `${siteUrl}/services/minibus-with-driver-hire`;

  const title =
    'Minibus Hire With Driver | Bolton, Wigan & Manchester | Oakdale Travel';

  const description =
    'Minibus hire with a professional driver across Bolton, Wigan, Manchester and the North West. Ideal for airports, events, weddings, schools and group travel.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: 'Minibus Hire With Driver',
      serviceType: 'Minibus hire with driver',
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
          name: 'Minibus With Driver',
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
          <Link href="/services" className="underline">
            Services
          </Link>
          {' / '}
          <span>Minibus With Driver</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Minibus Hire With Driver
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Oakdale Travel provides minibus hire with a professional driver
            across Bolton, Wigan, Manchester and the wider North West. We
            provide group transport for airport transfers, weddings, events,
            school journeys, family occasions, business travel, days out and
            regular contract requirements.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            With a driver included, your group can travel together without
            needing to arrange several cars, taxis or designated drivers.
            Simply provide your pickup point, destination, travel date,
            passenger numbers and journey times and we can prepare a quote
            based on your requirements.
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
              View Our 16-Seater Minibus
            </Link>
          </div>
        </section>

        <section className="mt-10 max-w-3xl">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/fleet/ford-transit-2015-exterior-side.webp"
              alt="Oakdale Travel minibus available for hire with a professional driver"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <p className="mt-3 text-sm text-gray-600">
            One of Oakdale Travel&apos;s minibuses used for private hire,
            airport journeys, events, school transport and contract work.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Hire a Minibus With a Driver?
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Hiring a minibus with a driver removes the need for someone in
            your group to drive, plan parking or organise several separate
            vehicles. Your group can travel together from the agreed pickup
            point to the destination, with return travel arranged where
            required.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            It is particularly useful for airport journeys, nights out,
            weddings, sporting events, concerts and group occasions where
            passengers want straightforward transport in both directions.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Airport Minibus With Driver
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              We provide group airport transfers with a driver to destinations
              including Manchester Airport, Liverpool John Lennon Airport and
              Leeds Bradford Airport. Outbound and return journeys can be
              arranged around your flight times.
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

          <div>
            <h2 className="text-2xl font-bold">
              Weddings, Events and Nights Out
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Minibus hire with a driver is ideal for weddings, concerts,
              race days, football matches, family events, nights out and
              other occasions where groups want to travel together and have
              their return transport organised in advance.
            </p>
          </div>

        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              School and Contract Transport
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Oakdale Travel also provides driver-operated minibus transport
              for schools, councils and organisations. Drivers working on
              relevant services are DBS checked, and regular transport
              requirements can be discussed directly with us.
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

          <div>
            <h2 className="text-2xl font-bold">
              16-Seater Minibus With Driver
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our main minibus service is suitable for groups of up to 16
              passengers. It provides a practical alternative to arranging
              several cars or taxis when your group needs to travel together.
            </p>

            <p className="mt-4">
              <Link
                href="/services/minibus-hire-16-seater"
                className="underline font-semibold"
              >
                View 16-seater minibus hire
              </Link>
            </p>
          </div>

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Minibus With Driver Across Bolton, Wigan and Manchester
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We provide minibus transport with a driver across Bolton, Wigan,
            Manchester and surrounding areas of Greater Manchester and the
            North West. Longer-distance journeys to destinations elsewhere
            in the UK can also be quoted.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/areas/bolton" className="underline font-semibold">
              Minibus hire Bolton
            </Link>

            <Link href="/areas/wigan" className="underline font-semibold">
              Minibus hire Wigan
            </Link>

            <Link href="/areas/manchester" className="underline font-semibold">
              Minibus hire Manchester
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Minibus Hire With Driver FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Is the driver included in the minibus hire?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides minibus hire with a professional
                driver.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can I book a return journey?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Provide your outward and return dates and times when
                requesting your quote so we can price the complete journey.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                How many passengers can you carry?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Our main minibus service accommodates groups of up to 16
                passengers. Tell us about any significant luggage requirements
                when requesting your quotation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Where do you provide minibus hire with a driver?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Our main service areas include Bolton, Wigan and Manchester,
                alongside surrounding parts of Greater Manchester and the
                North West. We also provide longer-distance journeys elsewhere
                in the UK.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Minibus With Driver Quote
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
