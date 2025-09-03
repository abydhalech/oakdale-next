import Layout from '../components/Layout';
import { AREAS, GMB_DESC, phone, siteUrl, gmbUrl } from '../components/utils';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Oakdale Travel',
  url: siteUrl,
  telephone: phone,
  description: GMB_DESC,
  openingHours: 'Mo-Su 06:00-22:00',
  logo: `${siteUrl}/logo.png`,
  sameAs: [gmbUrl],
  areaServed: AREAS
};

export default function Home() {
  return (
    <Layout seoProps={{
      title: 'Oakdale Travel — Minibus & coach hire Bolton, Wigan, Manchester',
      description: '16-seater minibus and coach hire for schools, social care, airports, weddings, corporate and private events across Bolton, Wigan, Manchester and the North West.',
      canonical: siteUrl,
      jsonLd
    }}>
      <div className="max-w-6xl mx-auto px-4 py-12 text-black">
        <h1 className="text-3xl md:text-4xl font-semibold">Reliable minibus & coach hire in the North West</h1>
        <p className="mt-3 text-black/80">{GMB_DESC}</p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Areas we cover</h2>
          <p className="mt-3 text-black/80">Choose your local area to find out more about our services nearby:</p>
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
        </section>
      </div>
    </Layout>
  );
}
