import SEO from './SEO';
import Link from 'next/link';
import Image from 'next/image';
import { phone } from './utils';

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
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Oakdale Travel — minibus & coach hire across Bolton, Wigan, Manchester and the North West.</p>
        </div>
      </footer>
    </>
  );
}
