import SEO from './SEO';
import Link from 'next/link';
import Image from 'next/image';
import { phone, email, address, gmbUrl, siteUrl } from './utils';


export default function Layout({ children, seoProps = {} }) {
  return (
    <>
      <SEO {...seoProps} />
      <header className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Oakdale Travel logo" width={150} height={40} priority />
          </Link>
          <nav className="flex items-center gap-5 text-sm">


  <Link href={`tel:${phone}`} className="button-primary text-xs">Call {phone}</Link>

  <Link href="/" className="hover:underline">Home</Link>
  <Link href="/services" className="hover:underline">Services</Link>
  <Link href="/areas" className="hover:underline">Areas</Link>
  <Link href="/fleet" className="hover:underline">Fleet</Link>
  <Link href="/faq" className="hover:underline">FAQ</Link>
  <Link href="/contact" className="hover:underline">Contact</Link>
  <Link href="/contact" className="button-primary text-xs">Get a Quote</Link>
          </nav>
        </div>
      </header>
              <main>{children}</main>
              <footer className="bg-black text-white py-10 mt-12 text-sm">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {/* Brand + brief */}
            <div>
              <div className="text-lg font-semibold">Oakdale Travel</div>
              <p className="mt-2 text-white/80">
                Reliable 16-seater minibus hire for schools, airport transfers, events and contracts across Greater Manchester & the North West.
              </p>
              <p className="mt-3 text-white/60">
                © {new Date().getFullYear()} Oakdale Travel
              </p>
            </div>
        
            {/* Contact (NAP) */}
            <div>
              <div className="font-semibold">Contact</div>
              <ul className="mt-3 space-y-2">
                <li>
                  <span className="text-white/70">Phone:</span>{' '}
                  <a className="underline" href={`tel:${phone}`}>{phone}</a>
                </li>
                <li>
                  <span className="text-white/70">Email:</span>{' '}
                  <a className="underline" href={`mailto:${email}`}>{email}</a>
                </li>
                <li>
                  <span className="text-white/70">Address:</span>{' '}
                  <span>{address}</span>
                </li>
                <li>
                  <a className="underline" href={gmbUrl} target="_blank" rel="noreferrer">
                    View on Google Maps
                  </a>
                </li>
              </ul>
            </div>
        
            {/* Quick links */}
            <div>
              <div className="font-semibold">Quick links</div>
              <ul className="mt-3 space-y-2">
                <li><a className="underline" href="/">Home</a></li>
                <li><a className="underline" href="/services">Services</a></li>
                <li><a className="underline" href="/areas">Areas we cover</a></li>
                <li><a className="underline" href="/fleet">Fleet</a></li>
                <li><a className="underline" href="/faq">FAQ</a></li>
                <li><a className="underline" href="/contact">Contact</a></li>
                <li><a className="underline" href={`${siteUrl}/sitemap.xml`}>Sitemap</a></li>
              </ul>
            </div>
          </div>
        </footer>

    </>
  );
}
