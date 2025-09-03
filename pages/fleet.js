import Layout from '../components/Layout';
import { siteUrl } from '../components/utils';

export default function Fleet() {
  const images = [
    { src: '/fleet/ford-transit-2015-exterior-front.jpg', alt: 'Ford Transit 2015 minibus exterior front view' },
    { src: '/fleet/ford-transit-2015-exterior-side.jpg',  alt: 'Ford Transit 2015 minibus side view' },
    { src: '/fleet/ford-transit-2015-exterior-rear.jpg',  alt: 'Ford Transit 2015 minibus rear view' },
    { src: '/fleet/ford-transit-2015-interior-seats.jpg', alt: '16-seater Ford Transit minibus interior seats with 3-point seat belts' },
    { src: '/fleet/ford-transit-2015-interior-front.jpg', alt: 'Driver and front cabin of Ford Transit 2015 minibus' },
    { src: '/fleet/ford-transit-2015-access-step.jpg',    alt: 'Ford Transit minibus side access step for easy boarding' }
  ];

  return (
    <Layout seoProps={{
      title: 'Fleet — Oakdale Travel Ford Transit 16-seater',
      description: 'Our 2015 Ford Transit 16-seater minibus is ideal for schools, social care, airport transfers, weddings, corporate and private hire across the North West.',
      canonical: `${siteUrl}/fleet`
    }}>
      <div className="max-w-6xl mx-auto px-4 py-12 text-black">
        <h1 className="text-3xl font-semibold">Our fleet</h1>
        <p className="text-black/80 mt-3">
          At Oakdale Travel, we operate a Ford Transit 16-seater minibus — spacious, comfortable and fully insured.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {images.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] border border-black/10 rounded-xl overflow-hidden">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href="/contact" className="button-primary">Request a quote</a>
        </div>
      </div>
    </Layout>
  );
}
