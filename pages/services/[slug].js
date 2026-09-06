import Layout from '../../components/Layout';
import SixteenSeaterServicePage from '../../components/SixteenSeaterServicePage';
import MinibusWithDriverPage from '../../components/MinibusWithDriverPage';
import AirportTransfersPage from '../../components/AirportTransfersPage';
import WeddingMinibusPage from '../../components/WeddingMinibusPage';
import FamilyGroupPrivateHirePage from '../../components/FamilyGroupPrivateHirePage';
import DayTripMinibusPage from '../../components/DayTripMinibusPage';
import { SERVICES, siteUrl } from '../../components/utils';

const toSlug = (s) =>
  s.toLowerCase().replace(/\s+/g, '-').replace(/\(|\)/g, '');

export async function getStaticPaths() {
  return {
    paths: SERVICES.map((service) => ({
      params: {
        slug: toSlug(service),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      service: SERVICES.find(
        (service) => toSlug(service) === params.slug
      ),
    },
  };
}

export default function ServicePage({ service }) {
  if (service === 'Minibus Hire (16-Seater)') {
    return <SixteenSeaterServicePage />;
  }

  if (service === 'Minibus with Driver Hire') {
    return <MinibusWithDriverPage />;
  }

  if (
    service ===
    'Airport Transfers (Manchester, Liverpool, Leeds Bradford)'
  ) {
    return <AirportTransfersPage />;
  }

  if (service === 'Wedding Transport Hire') {
    return <WeddingMinibusPage />;
  }

  if (service === 'Private Hire for Family Events') {
    return <FamilyGroupPrivateHirePage />;
  }

  if (service === 'Day Trips and Excursions') {
    return <DayTripMinibusPage />;
  }

  const title = `${service} | Oakdale Travel`;

  const description =
    `${service} across Bolton, Wigan, Manchester and the North West with driver-operated minibus transport for private groups, events and pre-booked journeys.`;

  const canonical = `${siteUrl}/services/${toSlug(service)}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service,
      url: canonical,
      provider: {
        '@type': 'Organization',
        name: 'Oakdale Travel',
        url: siteUrl,
      },
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
      <div className="max-w-6xl mx-auto px-4 py-12 text-black">
        <h1 className="text-3xl font-semibold">
          {service}
        </h1>

        <p className="text-black/80 mt-3 max-w-4xl leading-7">
          Oakdale Travel provides driver-operated minibus transport across
          Bolton, Wigan, Manchester and the wider North West for private
          groups, events and pre-booked journeys.
        </p>

        <p className="text-black/80 mt-3 max-w-4xl leading-7">
          For a quotation, send us your pickup location, destination, travel
          dates, required times and passenger numbers.
        </p>
      </div>
    </Layout>
  );
}
