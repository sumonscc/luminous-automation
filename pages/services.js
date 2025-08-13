import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Services() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>আমাদের সেবা</h1>
        <ul>
          <li>Installation</li>
          <li>Data Migration</li>
          <li>Training</li>
          <li>AMC & Monitoring</li>
        </ul>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
