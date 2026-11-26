// components/QuickQuote.js
import { useState } from 'react';
import { phone, email } from './utils';

// Reads your Formspree endpoint from Vercel env
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';

export default function QuickQuote({ embedded = false, sourcePage = '' } = {}) {
  const [journeyType, setJourneyType] = useState('return');
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
        'Online enquiries are temporarily unavailable. Please call or email us.'
      );
      return;
    }

    try {
      setSubmitting(true);
      const form = e.currentTarget;
      const data = new FormData(form);

      // Via points are already included in FormData by their named inputs.

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setViaPoints([]);
        setJourneyType('return');
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
      className={embedded ? "mt-4" : "mt-12 border border-black/10 rounded-2xl p-5 md:p-6 bg-white"}
    >
      {!embedded && <h2 className="text-2xl font-semibold text-black">Get a quick quote</h2>}
      <p className="text-black/70 mt-2">
        Please provide full addresses and postcodes for accurate pricing.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="grid gap-4 mt-6" autoComplete="on">
          {sourcePage && <input type="hidden" name="source_page" value={sourcePage} />}
          {/* Row 1 */}
          <div className="grid md:grid-cols-3 gap-4">
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Pickup address and postcode"
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

          {embedded && (
            <div className="grid sm:grid-cols-3 gap-4">
              <label className="grid gap-1 text-sm font-medium">Passengers
                <input className="border border-black/20 rounded-lg px-3 h-12" name="passengers" type="number" min="1" step="1" required placeholder="Number of passengers" />
              </label>
              <label className="grid gap-1 text-sm font-medium">Journey type
                <select className="border border-black/20 rounded-lg px-3 h-12 bg-white" name="journey_type" value={journeyType} onChange={e => setJourneyType(e.target.value)}>
                  <option value="return">Return journey</option>
                  <option value="one-way">One way</option>
                  <option value="multi-stop">Multiple stops</option>
                </select>
              </label>
              <label className="grid gap-1 text-sm font-medium">Luggage
                <select className="border border-black/20 rounded-lg px-3 h-12 bg-white" name="luggage" defaultValue="" required>
                  <option value="" disabled>Please select</option>
                  <option>No luggage</option>
                  <option>Hand luggage</option>
                  <option>Suitcases / large bags</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>
          )}
          {/* Row 2 */}
          <div className="grid md:grid-cols-3 gap-4">
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Destination address and postcode"
              name="destination"
              placeholder="Destination (full address & postcode)"
              required
            />
            {(!embedded || journeyType !== "one-way") && <><input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              type="date"
              name="return_date"
              required={embedded && journeyType === "return"}
              aria-label="Return date"
            />
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              type="time"
              name="return_time"
              aria-label="Return time"
              required={embedded && journeyType === "return"}
            /></>}
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-3 gap-4">
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Full name" name="name"
              placeholder="Name"
              required
            />
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              type="email"
              aria-label="Email address" name="email"
              placeholder="Email"
              required
            />
            <input
              className="border border-black/20 rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Telephone number" name="phone"
              placeholder="Phone"
            />
          </div>

          <textarea
            className="border border-black/20 rounded-lg px-4 py-3 min-h-[110px] focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Additional journey requirements" name="message"
            placeholder={embedded ? "Luggage quantities, accessibility, flight details or other requirements…" : "Passengers, luggage, accessibility, special notes…"}
          />

          {/* honeypot + subject */}
          <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
          <input type="hidden" name="_subject" value="Quick quote — Oakdale Travel" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
              Online enquiries are temporarily unavailable. Please <a className="underline" href={`tel:${phone}`}>call us</a> or <a className="underline" href={`mailto:${email}`}>email us</a>.
            </p>
          )}
        </form>
      ) : (
        <div className="mt-6 rounded-xl border border-black/10 p-4 bg-black/5 text-black">
          <p className="font-medium">✅ Thanks — your enquiry has been sent.</p>
          <p className="mt-1">We’ll get back to you shortly. If it’s urgent, <a className="underline" href={`tel:${phone}`}>call us</a>.</p>
        </div>
      )}
    </section>
  );
}
