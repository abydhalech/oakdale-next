import Layout from '../../components/Layout';
import { SERVICES, siteUrl } from '../../components/utils';

const toSlug = s => s.toLowerCase().replace(/\s+/g,'-').replace(/\(|\)/g,'');

export async function getStaticPaths() { return { paths: SERVICES.map(s => ({ params: { slug: toSlug(s) } })), fallback: false }; }
export async function getStaticProps({ params }) { return { props: { service: SERVICES.find(s => toSlug(s) === params.slug) } }; }

export default function ServicePage({ service }) {
  const title = `${service} — Oakdale Travel`;
  const description = `${service} across Bolton, Wigan, Manchester and the North West. Reliable, DBS‑checked drivers and modern vehicles.`;
  const canonical = `${siteUrl}/services/${toSlug(service)}`;
  const jsonLd = [{ '@context': 'https://schema.org', '@type': 'Service', name: service }];

  return (
    <Layout seoProps={{ title, description, canonical, jsonLd }}>
      <div className="max-w-6xl mx-auto px-4 py-12 text-black">
        <h1 className="text-3xl font-semibold">{service}</h1>
        <p className="text-black/80 mt-3">Professional, punctual and competitively priced. Popular destinations include Manchester and Liverpool airports, race courses and event venues.</p>
        <p className="text-black/80 mt-3">Get a fast quote via our contact page with pickup, drop‑off, dates and passenger count.</p>
      </div>
    </Layout>
  );
}
