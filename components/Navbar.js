import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  backgroundColor: '#003366', // গাঢ় নেভি ব্লু
  color: '#FFFFFF',           // সাদা টেক্সট
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // নিচে হালকা ছায়া
  position: 'sticky',
  top: 0,
  zIndex: 1000
}}>
      <h2>Luminous Automation</h2>
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
