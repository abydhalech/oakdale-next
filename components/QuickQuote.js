// components/QuickQuote.js
import { useState } from 'react';

// Reads your Formspree endpoint from Vercel env
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';

export default function QuickQuote() {
  const [viaPoints, setViaPoints] = useState([]); // plain JS array
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  function addVia() {
    if (viaPoints.length >= 3) return;
    setViaPoints((v) => [...v, '']);
  }
  function updateVia(i, val) {
    setViaPoints((v) => v.map((p, idx) => (idx === i ? val : p)));
  }
  function removeVia(i) {
    setViaPoints((v) => v.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');

    if (!FORMSPREE_ENDPOINT) {
      setErrorMsg(
        'Form not configured yet — please call or email us. (Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in Vercel.)'
      );
      return;
    }

    try {
      setSubmitting(true);
      const form = e.currentTarget;
      const data = new FormData(form);

      // include via points
      viaPoints.forEach((v, i) => data.append(`via_${i + 1}`, v));

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setViaPoints([]);
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
    <section
      aria-label="Quick quote form"
      className="mt-12 border border-black/10 rounded-2xl p-5 md:p-6 bg-white"
    >
      <h2 className="text-2xl font-semibold text-black">Get a quick quote</h2>
      <p className="text-black/70 mt-2">
        Please provide full addresses and postcodes for accurate pricing.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="grid gap-4 mt-6" autoComplete="on">
          {/* Row 1 */}
          <div className="grid md:grid-cols-3 gap-4">
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              name="pickup"
              placeholder="Pickup point (full address & postcode)"
              required
            />
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              type="date"
              name="depart_date"
              aria-label="Departure date"
              required
            />
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              type="time"
              name="depart_time"
              aria-label="Departure time"
              required
            />
          </div>

          {/* Via points */}
          <div>
            <button
              type="button"
              onClick={addVia}
              className="inline-flex items-center gap-2 border border-black/20 rounded-lg px-3 h-10 text-sm hover:bg-black hover:text-white transition"
              aria-label="Add via point"
            >
              <span className="text-xl leading-none">+</span> Via point
            </button>

            {viaPoints.map((val, i) => (
              <div key={i} className="grid md:grid-cols-[1fr_auto] gap-2 mt-3">
                <input
                  className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder={`Via point ${i + 1} (address & postcode)`}
                  value={val}
                  onChange={(e) => updateVia(i, e.target.value)}
                  name={`via_${i + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeVia(i)}
                  className="h-12 px-3 border border-black/20 rounded-lg text-sm hover:bg-black hover:text-white transition"
                  aria-label={`Remove via point ${i + 1}`}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-3 gap-4">
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              name="destination"
              placeholder="Destination (full address & postcode)"
              required
            />
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              type="date"
              name="return_date"
              aria-label="Return date"
            />
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              type="time"
              name="return_time"
              aria-label="Return time"
            />
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-3 gap-4">
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              name="phone"
              placeholder="Phone"
            />
          </div>

          <textarea
            className="border border-black/20 rounded-lg px-4 py-3 min-h-[110px] focus:outline-none focus:ring-2 focus:ring-black"
            name="message"
            placeholder="Passengers, luggage, accessibility, special notes…"
          />

          {/* honeypot + subject */}
          <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
          <input type="hidden" name="_subject" value="Quick quote — Oakdale Travel" />

          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-black/60">
              Please check the form for errors before submitting your enquiry.
            </p>
            <button
              type="submit"
              className="h-12 px-5 rounded-lg bg-black text-white font-medium hover:opacity-90 disabled:opacity-60"
              disabled={submitting}
            >
              {submitting ? 'Sending…' : 'Submit enquiry'}
            </button>
          </div>

          {errorMsg && <p className="text-red-600 text-sm mt-2">{errorMsg}</p>}
          {!FORMSPREE_ENDPOINT && (
            <p className="text-amber-600 text-sm mt-2">
              Form endpoint not set. Add <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> in Vercel.
            </p>
          )}
        </form>
      ) : (
        <div className="mt-6 rounded-xl border border-black/10 p-4 bg-black/5 text-black">
          <p className="font-medium">✅ Thanks — your enquiry has been sent.</p>
          <p className="mt-1">We’ll get back to you shortly. If it’s urgent, call us.</p>
        </div>
      )}
    </section>
  );
}
