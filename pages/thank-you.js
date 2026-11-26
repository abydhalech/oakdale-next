import Link from 'next/link';
import Layout from '../components/Layout';
import { phone, email, siteUrl } from '../components/utils';

export default function ThankYou() {
  return (
    <Layout seoProps={{
      title: 'Thank You | Oakdale Travel',
      description: 'Thank you for getting in touch with Oakdale Travel.',
      canonical: `${siteUrl}/thank-you`,
      noindex: true,
    }}>
      <section className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-black">
        <div className="rounded-2xl border border-gray-200 p-6 sm:p-10">
          <span aria-hidden="true" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl text-white">✓</span>
          <h1 className="mt-6 text-3xl sm:text-4xl font-bold">Thank you for your enquiry</h1>
          <p className="mt-4 text-lg leading-7 text-gray-700">Your enquiry has been received. We'll review your journey requirements and get back to you as soon as possible.</p>
          <p className="mt-4 leading-7 text-gray-700">Your booking is not confirmed until we agree the details and availability with you.</p>
          <p className="mt-6 text-gray-700">Need to speak to us? <a className="font-semibold underline" href={`tel:${phone}`}>Call 07758 703691</a> or <a className="underline break-all" href={`mailto:${email}`}>{email}</a>.</p>
          <Link href="/" className="inline-block mt-8 rounded bg-black px-6 py-3 font-semibold text-white">Back to Home</Link>
        </div>
      </section>
    </Layout>
  );
}
