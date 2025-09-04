// pages/contact.js
import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import MapBlock from '../components/MapBlock';
import { AREAS, phone, email, address, siteUrl } from '../components/utils';

// Schema for SEO
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Oakdale Travel",
  "url": `${siteUrl}/contact`,
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Oakdale Travel",
    "url": siteUrl,
    "telephone": phone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cambrian Business Park",
      "addressLocality": "Bolton",
      "postalCode": "BL3 6JF",
      "addressCountry": "GB"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": phone,
      "email": email,
      "areaServed": AREAS
    }]
  }
};

// Formspree endpoint: set in Vercel as NEXT_PUBLIC_FORMSPREE_ENDPOINT
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');
    if (!FORMSPREE_ENDPOINT) {
      setErrorMsg('Form is not configured yet. Please call or email us directly.');
      return;
    }

    try {
      setSubmitting(true);
      const form = e.currentTarget;
      const data = new FormData(form);

      // Optional honeypot check
      if (data.get('_gotcha')) {
        setSubmitting(false);
        return; // likely a bot
      }

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json?.error || 'Something went wrong. Please try again or call us.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again or call us.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Layout>
      <Head>
        <title>Contact Oakdale Travel — request a quote</title>
        <meta
          name="description"
          content="Get a fast quote for minibus & coach hire across Bolton, Wigan, Manchester, Liverpool and the North West. Call, email or use the form."
        />
        <link rel="canonical" href={`${siteUrl}/contact`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-12 text-black">
        <h1 className="text-3xl font-semibold">Contact Oakdale Travel</h1>
        <p className="mt-3 text-black/80">
          For quotes and bookings, include pickup, destination, date/time, passenger count and any luggage/access needs.
        </p>

        {/* Quick actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="button-primary" href={`tel:${phone}`}>Call {phone}</a>
          <a className="button-ghost" href={`mailto:${email}`}>Email {email}</a>
        </div>

        {/* Two-column: form + business details */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Contact form */}
          <section aria-label="Request a quote">
            <h2 className="text-xl font-semibold">Request a quote</h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="grid gap-3 mt-4">
                <input className="border border-black rounded px-4 py-3" name="name" placeholder="Your name" required />
                <input className="border border-black rounded px-4 py-3" name="contact" placeholder="Email or phone" required />
                <input className="border border-black rounded px-4 py-3" name="journey" placeholder="Pickup, destination, date & time" required />
                <textarea className="border border-black rounded px-4 py-3" name="message" rows={5} placeholder="Passengers, luggage, accessibility, notes…"></textarea>

                {/* Spam honeypot */}
                <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

                {/* Helpful metadata for your inbox */}
                <input type="hidden" name="_subject" value="New quote request — Oakdale Travel" />

                <button type="submit" className="button-primary" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send'}
                </button>

                {errorMsg && (
                  <p className="text-red-600 text-sm">{errorMsg}</p>
                )}

                {!FORMSPREE_ENDPOINT && (
                  <p className="text-amber-600 text-sm">
                    Form endpoint not set. Add <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> in Vercel to enable submissions.
                  </p>
                )}
              </form>
            ) : (
              <div className="mt-4 rounded-xl border border-black/10 p-4 bg-green-50 text-green-800">
                <p className="font-medium">✅ Thanks! We’ve received your enquiry.</p>
                <p className="mt-1">We’ll get back to you shortly. If it’s urgent, call <a className="underline" href={`tel:${phone}`}>{phone}</a>.</p>
              </div>
            )}

            <p className="mt-3 text-xs text-black/60">
              By submitting this form you agree to be contacted about your enquiry.
            </p>
          </section>

          {/* Business details / NAP */}
          <aside aria-label="Business details" className="md:pl-6">
            <h2 className="text-xl font-semibold">Our details</h2>
            <ul className="mt-4 space-y-2 text-black/90">
              <li><span className="font-medium">Phone:</span> <a className="underline" href={`tel:${phone}`}>{phone}</a></li>
              <li><span className="font-medium">Email:</span> <a className="underline" href={`mailto:${email}`}>{email}</a></li>
              <li><span className="font-medium">Address:</span> {address}</li>
              <li><span className="font-medium">Areas served:</span> Bolton, Wigan, Manchester, Liverpool, and the wider North West</li>
            </ul>

           
          </aside>
        </div>

        {/* Map */}
        <MapBlock />
      </div>
    </Layout>
  );
}
