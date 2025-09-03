import Layout from '../components/Layout';
import { siteUrl } from '../components/utils';

export default function Fleet() {
  return (
    <Layout seoProps={{
      title: 'Fleet — 16‑seater minibuses & small coaches',
      description: 'Modern, well‑maintained 16‑seater minibuses and small coaches with 3‑point belts and climate control.',
      canonical: `${siteUrl}/fleet`
    }}>
      <div className="max-w-6xl mx-auto px-4 py-12 text-black">
        <h1 className="text-3xl font-semibold">Our fleet</h1>
        <p className="text-black/80 mt-3">Clean, comfortable vehicles suitable for schools, care transport and private hire.</p>
      </div>
    </Layout>
  );
}
