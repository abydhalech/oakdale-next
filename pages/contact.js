// pages/contact.js
import Layout from '../components/Layout';
import { useState } from 'react';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');

    if (!FORMSPREE_ENDPOINT) {
      setErrorMsg('Form not configured. Please call or email us directly.');
      return;
    }

    try {
      setSubmitting(true);
      const form = e.currentTarget;
      const data = new FormData(form);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json?.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Layout seoProps={{ title: 'Contact us — Oakdale Travel', description: 'Get in touch with Oakdale Travel for bookings, quotes and enquiries.' }}>
      <div className="max-w-3xl mx-auto px-4 py-12 text-black">
        <h1 className="text-3xl font-semibold">Contact us</h1>
        <p className="mt-3 text-black/70">
          Fill in the form below and we’ll get back to you as soon as possible.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="grid gap-4 mt-8">
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />

            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              type="tel"
              name="phone"
              placeholder="Phone number"
              required
            />

            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              type="email"
              name="email"
              placeholder="Email address"
              required
            />

            <textarea
              className="border border-black/20 rounded-lg px-4 py-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-black"
              name="message"
              placeholder="Your message"
              required
            />

            <input type="hidden" name="_subject" value="Contact form — Oakdale Travel" />
            <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

            <div className="flex justify-end">
              <button
                type="submit"
                className="h-12 px-6 rounded-lg bg-black text-white font-medium hover:opacity-90 disabled:opacity-60"
                disabled={submitting}
              >
                {submitting ? 'Sending…' : 'Send message'}
              </button>
            </div>

            {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
            {!FORMSPREE_ENDPOINT && (
              <p className="text-amber-600 text-sm">
                Warning: No Formspree endpoint set in Vercel environment.
              </p>
            )}
          </form>
        ) : (
          <div className="mt-6 rounded-xl border border-black/10 p-4 bg-black/5">
            <p className="font-medium">✅ Thanks — your message has been sent.</p>
            <p className="mt-1">We’ll reply soon. If urgent, call us on 07758 703691.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
