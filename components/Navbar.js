import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      backgroundColor: '#003366',
      color: 'white'
    }}>
      <h2>Luminous</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/solutions">Solutions</Link>
        <Link href="/services">Services</Link>
        <Link href="/support">Support</Link>
        <Link href="/news-events">News</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
