import { address, gmbUrl } from './utils';

export default function MapBlock() {
  // Simple embed using your address; replace spaces with + for the query:
  const q = encodeURIComponent(address);
  const src = `https://www.google.com/maps?q=${q}&output=embed`;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">Find us</h2>
      <p className="mt-2 text-black/80">
        {address} — serving Greater Manchester, Merseyside and the North West.
      </p>
      <div className="mt-4 aspect-[16/9] w-full border border-black/10 rounded-xl overflow-hidden">
        <iframe
          title="Oakdale Travel location"
          src={src}
          style={{ border: 0, width: '100%', height: '100%' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-2 text-sm">
        Open in <a className="underline" href={gmbUrl} target="_blank" rel="noreferrer">Google Maps</a>.
      </p>
    </section>
  );
}

