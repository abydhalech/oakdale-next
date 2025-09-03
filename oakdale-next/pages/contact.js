import Layout from '../components/Layout';
import { siteUrl, phone, email } from '../components/utils';

// Set in Vercel env: NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/yourid';

export default function Contact() {
  return (
    <Layout seoProps={{
      title: 'Contact Oakdale Travel — request a quote',
      description: 'Get a fast quote for minibus & coach hire in Bolton, Wigan, Manchester and the North West.',
      canonical: `${siteUrl}/contact`
    }}>
      <div className="max-w-6xl mx-auto px-4 py-12 text-black">
        <h1 className="text-3xl font-semibold">Request a quote</h1>
        <p className="text-black/80 mt-3">Phone {phone} or email {email}. Include pickup, drop‑off, date/time, passengers and any accessibility needs.</p>
        <form action={FORMSPREE_ENDPOINT} method="POST" className="grid md:grid-cols-2 gap-3 mt-6 max-w-2xl">
          <input className="border border-black rounded px-4 py-3" name="name" placeholder="Your name" required />
          <input className="border border-black rounded px-4 py-3" name="contact" placeholder="Email or phone" required />
          <input className="md:col-span-2 border border-black rounded px-4 py-3" name="journey" placeholder="Pickup, drop‑off, date/time" required />
          <textarea className="md:col-span-2 border border-black rounded px-4 py-3" name="message" rows="4" placeholder="Passengers, luggage, accessibility…"></textarea>
          <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
          <input type="hidden" name="_subject" value="New quote request — Oakdale Travel" />
          <input type="hidden" name="_redirect" value={`${siteUrl}/contact`} />
          <button className="button-primary md:col-span-2">Send</button>
        </form>
      </div>
    </Layout>
  );
}
