// components/MapBlock.js
import { useState } from 'react';
import { address, gmbUrl } from './utils';

// Optional: drop a small JPEG/WebP preview at /public/map-preview.jpg (e.g. a screenshot)
// If you don't have one yet, the component still works (it just shows a grey box).

export default function MapBlock() {
  const [showMap, setShowMap] = useState(false);
  const q = encodeURIComponent(address);
  const iframeSrc = `https://www.google.com/maps?q=${q}&output=embed`;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">Find us</h2>
      <p className="mt-2 text-black/80">
        {address} — serving Greater Manchester, Merseyside and the North West.
      </p>

      {/* Map placeholder (no heavy JS until user clicks) */}
      <div className="mt-4 aspect-[16/9] w-full border border-black/10 rounded-xl overflow-hidden relative bg-black/[0.03]">
        {!showMap ? (
          <button
            type="button"
            onClick={() => setShowMap(true)}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            aria-label="Load interactive map"
          >
            {/* Optional preview image if you add /public/map-preview.jpg */}
            <img
              src="/map-preview.jpg"
              alt="Map preview"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="px-4 py-2 rounded-lg bg-black text-white text-sm absolute">
              Load interactive map
            </span>
          </button>
        ) : (
          <iframe
            title="Oakdale Travel location"
            src={iframeSrc}
            style={{ border: 0, width: '100%', height: '100%' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>

      <p className="mt-2 text-sm">
        Or open directly in{' '}
        <a className="underline" href={gmbUrl} target="_blank" rel="noreferrer">
          Google Maps
        </a>.
      </p>
    </section>
  );
}
