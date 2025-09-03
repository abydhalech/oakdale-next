import Layout from '../../components/Layout';
import { SERVICES, siteUrl } from '../../components/utils';

const serviceJsonLd = SERVICES.map(name => ({ '@context': 'https://schema.org', '@type': 'Service', name }));

export default function ServicesPage() {
  return (
    <Layout seoProps={{
      title: 'Services — Minibus & coach hire for schools, social care, airports & events',
      description: 'School transport, adult social care, airport transfers (Manchester, Liverpool, Leeds Bradford), weddings, corporate travel, sports teams and private hire.',
      canonical: `${siteUrl}/services`,
      jsonLd: serviceJsonLd
    }}>
      <div className="max-w-6xl mx-auto px-4 py-12 text-black">
        <h1 className="text-3xl font-semibold">Transport services</h1>
        <ul className="grid md:grid-cols-2 gap-3 mt-6 list-disc pl-5">
          {SERVICES.map(s => (
            <li key={s}><a href={`/services/${s.toLowerCase().replace(/\s+/g,'-').replace(/\(|\)/g,'')}`} className="underline">{s}</a></li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
