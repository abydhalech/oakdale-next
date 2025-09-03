import Layout from '../../components/Layout';
import { AREAS, siteUrl } from '../../components/utils';

const toSlug = s => s.toLowerCase().replace(/\s+/g,'-');

const UNIQUE = {
  Bolton: 'Popular routes include Bolton School, Smithills and transfers to Manchester Airport (average 25–35 mins off‑peak). We regularly support school runs and match‑day shuttles to the Toughsheet Community Stadium.',
  Wigan: 'Frequent trips to Wigan & Leigh College, Wrightington Hospital and DW Stadium. Airport transfers to Manchester/Liverpool are common, with early‑morning pick‑ups available.',
  Manchester: 'City centre venues, universities and conference hotels are covered daily. Peak‑time planning avoids inner‑ring congestion; we stage pick‑ups for Deansgate, Piccadilly and the Etihad.',
  Leigh: 'Regular journeys to Leigh Sports Village and local schools. Handy connections to Manchester and Liverpool airports for early flights.',
  Bury: 'We serve Bury Market trips, local schools and family events, plus dependable transfers to Manchester Airport.',
  Salford: 'Trusted for MediaCityUK, University of Salford and Salford Quays events, from conferences to filming units.',
  Rochdale: 'School contracts and Hollingworth Lake day trips are frequent; Manchester Airport transfers available 24/7.',
  Warrington: 'Popular for Gulliver’s World groups, Halliwell Jones Stadium fixtures and business park transfers.',
  Preston: 'Serving UCLan, Deepdale Stadium and event venues across the city, with reliable airport and day‑trip services.',
  Liverpool: 'Covering Anfield, Goodison Park, waterfront and city venues; stag/hen events and airport links are common.',
  'St Helens': 'Trips to Totally Wicked Stadium, schools and local attractions across Merseyside; social care routes supported.',
  Stockport: 'Edgeley Park, Stockport Grammar and strong connectivity to Manchester Airport for early departures.',
  Oldham: 'Match‑day travel for Oldham Athletic, school routes and evenings into Manchester city centre.',
  Blackburn: 'Blackburn Rovers fixtures, local schools and reliable airport transfers to Manchester and Liverpool.'
};

export async function getStaticPaths() {
  return { paths: AREAS.map(a => ({ params: { slug: toSlug(a) } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const area = AREAS.find(a => toSlug(a) === params.slug);
  return { props: { area } };
}

export default function AreaPage({ area }) {
  const slug = toSlug(area);
  const title = `Minibus & coach hire in ${area} — Oakdale Travel`;
  const description = `Reliable 16‑seater minibus and small coach hire in ${area} for school runs, airport transfers, weddings, corporate events and adult social care.`;
  const canonical = `${siteUrl}/areas/${slug}`;

  const jsonLd = [{ '@context': 'https://schema.org', '@type': 'Service', name: `Minibus & coach hire in ${area}`, areaServed: area }];

  return (
    <Layout seoProps={{ title, description, canonical, jsonLd }}>
      <div className="max-w-6xl mx-auto px-4 py-12 text-black">
        <h1 className="text-3xl font-semibold">Minibus & coach hire in {area}</h1>
        <p className="text-black/80 mt-3">DBS‑checked drivers, modern vehicles and fair pricing. Daily contracts and ad‑hoc journeys welcomed.</p>
        {UNIQUE[area] && <p className="text-black/80 mt-3">{UNIQUE[area]}</p>}
        <p className="text-black/80 mt-3">For quotes, include pickup, drop‑off, dates and passenger count.</p>
      </div>
    </Layout>
  );
}
