import { useState } from 'react';
import SEO from './SEO';
import Link from 'next/link';
import Image from 'next/image';
import { phone, email, address, gmbUrl, siteUrl } from './utils';


export default function Layout({ children, seoProps = {} }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SEO {...seoProps} />
      <header className="bg-black text-white">
  <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
    
    <Link href="/" className="flex items-center gap-2 flex-shrink-0">
      <Image
        src="/logo.png"
        alt="Oakdale Travel logo"
        width={150}
        height={40}
        priority
        className="w-[120px] md:w-[150px] h-auto"
      />
    </Link>

    {/* Desktop navigation */}
    <nav className="hidden md:flex items-center gap-5 text-sm">
      <a href={`tel:${phone}`} className="button-primary text-xs">
        Call {phone}
      </a>

      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/services" className="hover:underline">Services</Link>
      <Link href="/areas" className="hover:underline">Areas</Link>
      <Link href="/fleet" className="hover:underline">Fleet</Link>
      <Link href="/faq" className="hover:underline">FAQ</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>

      <Link href="/contact" className="button-primary text-xs">
        Get a Quote
      </Link>
    </nav>

    {/* Mobile controls */}
    <div className="flex md:hidden items-center gap-2">
      <a
        href={`tel:${phone}`}
        className="border border-white px-3 py-2 rounded text-xs font-semibold"
      >
        Call
      </a>

      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation menu"
        className="border border-white px-3 py-2 rounded text-xs font-semibold"
      >
        Menu
      </button>
    </div>

  </div>

  {/* Mobile navigation */}
  {menuOpen && (
    <nav className="md:hidden border-t border-white/20 px-4 py-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 text-sm">

        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link href="/services" onClick={() => setMenuOpen(false)}>
          Services
        </Link>

        <Link href="/areas" onClick={() => setMenuOpen(false)}>
          Areas
        </Link>

        <Link href="/fleet" onClick={() => setMenuOpen(false)}>
          Fleet
        </Link>

        <Link href="/faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </Link>

        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="inline-block bg-white text-black px-4 py-3 rounded font-semibold text-center"
        >
          Get a Quote
        </Link>

      </div>
    </nav>
  )}
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
