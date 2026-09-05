import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout';
import { siteUrl, gmbUrl } from './utils';

export default function RaceDayMinibusPage() {
  const canonical = `${siteUrl}/services/race-day-minibus-hire`;

  const title =
    'Race Day Minibus Hire | Haydock, Aintree, York & Chester | Oakdale Travel';

  const description =
    'Race day minibus hire with a driver for Haydock, Aintree, York, Chester and other UK racecourses. 16-seater group transport from Bolton, Wigan, Manchester and the North West.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#race-day-minibus-hire`,
      name: 'Race Day Minibus Hire',
      serviceType: 'Racecourse minibus transport with driver',
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
          name: 'Race Day Minibus Hire',
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
          <span>Race Day Minibus Hire</span>
        </nav>

        <section className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Race Day Minibus Hire – 16-Seater With Driver
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Planning a day at the races with friends, family or a larger
            group? Oakdale Travel provides race day minibus hire with a driver
            from Bolton, Wigan, Manchester and surrounding areas.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Our 16-seater minibus is ideal for groups travelling together to
            racecourses including Haydock Park, Aintree, York and Chester.
            Outward and return journeys can be arranged so your group has its
            transport organised for the whole day.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded font-semibold"
            >
              Get a Race Day Quote
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
              alt="Oakdale Travel 16-seater minibus for race day group transport"
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
                Group race day transport for up to 16 passengers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Driver Included
              </h2>

              <p className="mt-2 text-gray-700">
                Your race day booking includes a professional driver.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Group Pickups
              </h2>

              <p className="mt-2 text-gray-700">
                Travel together from an agreed pickup point to the racecourse.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Return Journey
              </h2>

              <p className="mt-2 text-gray-700">
                Arrange transport back after the racing or event finishes.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Group Transport to the Races
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Race days are often enjoyed as a group, but arranging several
            taxis or deciding who will drive can make the journey more
            complicated than it needs to be. A private minibus allows your
            group to travel together from the agreed collection point to the
            racecourse.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Return transport can also be arranged in advance, meaning the
            group already knows how it is getting home once the racing,
            entertainment or evening event has finished.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Haydock Park Racecourse Minibus Hire
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Haydock Park is one of the racecourses Oakdale Travel has
            transported groups to previously. We can provide pre-booked
            minibus transport for race days, music events and other occasions
            held at Haydock Park.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Groups can arrange an outward journey to the racecourse and a
            collection afterwards, helping everyone travel together without
            relying on separate cars or taxis.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              Aintree Racecourse Minibus Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              We provide group minibus transport to Aintree Racecourse for
              race days and major events. A pre-booked minibus can collect
              your group from an agreed location and provide return transport
              afterwards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              York Racecourse Minibus Hire
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Longer-distance race day transport to York Racecourse can also
              be arranged. This is particularly useful for groups who want to
              travel together rather than organise several vehicles for the
              journey.
            </p>
          </div>

        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Chester Racecourse Minibus Hire
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel also provides group transport to Chester
            Racecourse. Outward and return journeys can be arranged around
            your race day plans, with pickup details and timings agreed when
            booking.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Other UK Racecourse Transfers
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We are not limited to Haydock, Aintree, York and Chester. Group
            minibus transport can also be quoted for other racecourses and
            racing events across the UK.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Depending on your journey, this may include racecourses such as
            Doncaster, Cartmel, Carlisle, Cheltenham, Ascot, Newmarket and
            other destinations. Send us the racecourse, date, passenger
            numbers and pickup location and we can assess the journey.
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold">
              16-Seater Race Day Minibus
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Our 16-seater minibus is ideal for groups who want to enjoy the
              day together from the moment they leave. Smaller groups can also
              use the vehicle, so you do not need exactly 16 passengers to
              request a quote.
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
              Race Day Minibus With Driver
            </h2>

            <p className="mt-4 leading-7 text-gray-700">
              Your booking includes a driver, meaning nobody in the group
              needs to drive to the racecourse or worry about leaving their
              own vehicle there after the event.
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
            Race Day Minibus Hire From Bolton, Wigan &amp; Manchester
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            Oakdale Travel is based in Bolton and provides race day group
            transport from Bolton, Wigan, Manchester and surrounding areas.
            Longer-distance racecourse journeys can also be discussed.
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
            What a Race Day Booking Can Include
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Group Collection
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Collect the group from an agreed meeting point before
                travelling to the racecourse together.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Multiple Pickups
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                More than one collection point can be discussed where it is
                practical for the route and timings.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Outward &amp; Return Travel
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Arrange your journey to the racecourse and your transport home
                as part of the same booking.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold">
                Private Group Transport
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Your group travels together in a private minibus with a
                driver.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            A Genuine Race Day Customer Review
          </h2>

          <div className="mt-6 max-w-3xl border border-gray-200 rounded-lg p-6">
            <div
              className="text-lg font-semibold"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </div>

            <blockquote className="mt-4 leading-7 text-gray-700">
              “Fantastic service all inc. trip to Haydock races for music
              event and evening races. Abdullah is a lovely guy and
              communication was brilliant. Top guy, professional friendly
              service. 100% recommend to anyone.”
            </blockquote>

            <p className="mt-4 font-semibold">
              Angela Kelsall
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
            Race Day Minibus Hire FAQs
          </h2>

          <div className="mt-8 space-y-8 max-w-4xl">

            <div>
              <h3 className="text-xl font-semibold">
                Does race day minibus hire include a driver?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Oakdale Travel provides race day minibus hire with a
                driver.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                How many passengers can your race day minibus carry?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Our main minibus can carry groups of up to 16 passengers.
                Smaller groups can also request a quote.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Do you provide transport to Haydock Park Racecourse?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. We have previously transported customers to Haydock Park
                for racing and event days.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you take us to Aintree, York or Chester Racecourse?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. We can provide group transport to Aintree, York and
                Chester Racecourse, as well as other UK racecourses.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Can you pick us up again after the races?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Yes. Return transport can be included when booking your
                outward journey.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                What information do you need for a race day quote?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Send us your pickup location, racecourse, travel date,
                passenger numbers, required departure time and expected return
                time.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-14 border-t pt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Get a Race Day Minibus Quote
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Tell us which racecourse you are visiting, your pickup location,
            travel date, passenger numbers and return plans and we can prepare
            a quotation for your group.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-7 py-3 rounded font-semibold"
            >
              Request a Race Day Quote
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
