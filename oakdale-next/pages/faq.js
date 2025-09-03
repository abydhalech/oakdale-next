import Layout from '../components/Layout';
import { siteUrl } from '../components/utils';

const faqs = [
  { q: 'Do you serve Manchester and Liverpool airports?', a: 'Yes — we regularly operate transfers to Manchester and Liverpool, plus Leeds Bradford by request.' },
  { q: 'Are drivers DBS checked?', a: 'Yes, our drivers hold enhanced DBS checks and relevant training (e.g. MiDAS/CPC where required).' },
  { q: 'What size vehicles are available?', a: '16‑seater minibuses and small coaches for medium groups.' },
  { q: 'Do you provide school and adult social care transport?', a: 'Yes — we operate contracted and ad‑hoc routes for schools, councils and care providers.' }
];

const jsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };

export default function FAQ() {
  return (
    <Layout seoProps={{
      title: 'FAQ — Oakdale Travel',
      description: 'Answers about minibus & coach hire, airports, driver checks, and contracts.',
      canonical: `${siteUrl}/faq`,
      jsonLd
    }}>
      <div className="max-w-6xl mx-auto px-4 py-12 text-black">
        <h1 className="text-3xl font-semibold">Frequently asked questions</h1>
        <ul className="mt-6 grid gap-4">
          {faqs.map(({ q, a }) => (
            <li key={q}>
              <h2 className="text-xl font-medium">{q}</h2>
              <p className="text-black/80 mt-1">{a}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
