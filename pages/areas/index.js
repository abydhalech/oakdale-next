import Layout from '../../components/Layout';
import { siteUrl } from '../../components/utils';

const AREAS = [
  'Bolton','Wigan','Leigh','Bury','Salford','Manchester',
  'Rochdale','Warrington','Preston','Liverpool','St Helens',
  'Stockport','Oldham','Blackburn'
];

export default function AreasIndex() {
  return (
    <Layout seoProps={{
      title: 'Areas we cover — Oakdale Travel',
      description: 'Minibus and coach hire across Bolton, Wigan, Manchester, Leigh, Bury, Salford, Rochdale, Warrington, Preston, Liverpool, St Helens, Stockport, Oldham and Blackburn.',
      canonical: `${siteUrl}/areas`
    }}>
      <div className="max-w-6xl mx-auto px-4 py-12 text-black">
        <h1 className="text-3xl font-semibold">Areas we cover</h1>
        <p className="mt-3 text-black/80">Oakdale Travel provides professional and competitively priced transport services across the North West. Select your local area below to learn more about our services nearby.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {AREAS.map(town => (
            <div key={town}>
              <a href={`/areas/${town.toLowerCase().replace(/\s+/g,'-')}`} className="underline font-medium">
                Minibus & coach hire in {town}
              </a>
              <p className="text-black/70 text-sm mt-1">
                {town === 'Bolton' && 'Serving Bolton School, Toughsheet Stadium and regular transfers to Manchester Airport.'}
                {town === 'Wigan' && 'Covering Wigan & Leigh College, DW Stadium and transfers to Manchester & Liverpool airports.'}
                {town === 'Manchester' && 'City centre venues, universities, Old Trafford, Etihad and Manchester Airport connections.'}
                {town === 'Leigh' && 'Group travel to Leigh Sports Village, local schools and reliable airport shuttles.'}
                {town === 'Bury' && 'Trips to Bury Market, local schools and frequent Manchester Airport transfers.'}
                {town === 'Salford' && 'Covering MediaCityUK, University of Salford and Salford Quays events.'}
                {town === 'Rochdale' && 'School contracts, Hollingworth Lake trips and Manchester Airport transfers.'}
                {town === 'Warrington' && 'Transport for Gulliver’s World, Halliwell Jones Stadium and business centres.'}
                {town === 'Preston' && 'Serving UCLan, Deepdale Stadium and reliable airport & event transfers.'}
                {town === 'Liverpool' && 'Covering Anfield, Goodison Park, universities and stag/hen party transport.'}
                {town === 'St Helens' && 'Trips to Totally Wicked Stadium, schools and social care travel across Merseyside.'}
                {town === 'Stockport' && 'Edgeley Park, Stockport Grammar and frequent Manchester Airport transfers.'}
                {town === 'Oldham' && 'Oldham Athletic match-day hire, school runs and family event transport.'}
                {town === 'Blackburn' && 'Blackburn Rovers games, local schools and regular airport journeys.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
