import Layout from '../components/Layout';
import { siteUrl } from '../components/utils';

export default function NotFound() {
  return (
    <Layout seoProps={{
      title: 'Page not found',
      description: 'The page you’re looking for doesn’t exist.',
      canonical: `${siteUrl}/404`,
      noindex: true
    }}>
      <main className="max-w-6xl mx-auto px-4 py-16 text-black">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-black/70">
          Try our <a className="underline" href="/">homepage</a> or <a className="underline" href="/contact">request a quote</a>.
        </p>
      </main>
    </Layout>
  );
}
