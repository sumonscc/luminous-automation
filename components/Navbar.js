import Image from 'next/image';
import Image from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  backgroundColor: '#003366',
  color: '#FFFFFF',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // নিচে হালকা ছায়া
  position: 'sticky',
  top: 0,
  zIndex: 1000
}}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Image src="/images/logo.png" alt="Luminous Logo" width={90} height={50} />
      <h2 style={{ margin: 0 }}>Luminous Automation</h2>
      </div>

  <div style={{ display: 'flex', gap: '1rem' }}>
  
  <Link href="/">  <span style={{ color: '#00cc99', fontWeight: 'bold', textDecoration: 'none' }}>Home</span>
</Link>
  <Link href="/">  <span style={{ color: '#00cc99', fontWeight: 'bold', textDecoration: 'none' }}>Products</span>
</Link>
  <Link href="/">  <span style={{ color: '#00cc99', fontWeight: 'bold', textDecoration: 'none' }}>Solutions</span>
</Link>
  <Link href="/">  <span style={{ color: '#00cc99', fontWeight: 'bold', textDecoration: 'none' }}>Services</span>
</Link>
  <Link href="/">  <span style={{ color: '#00cc99', fontWeight: 'bold', textDecoration: 'none' }}>Support</span>
</Link>
  <Link href="/">  <span style={{ color: '#00cc99', fontWeight: 'bold', textDecoration: 'none' }}>News</span>
</Link>
  <Link href="/">  <span style={{ color: '#00cc99', fontWeight: 'bold', textDecoration: 'none' }}>About</span>
</Link>
  <Link href="/">  <span style={{ color: '#00cc99', fontWeight: 'bold', textDecoration: 'none' }}>Contact</span>
</Link>
  
      </div>
    </nav>
  );
}
