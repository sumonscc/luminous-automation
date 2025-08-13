import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Solutions() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>আমাদের সলিউশন</h1>
        <ul>
          <li>Intelligent Building</li>
          <li>Smart Factory</li>
          <li>Industrial Solar</li>
          <li>Network Infrastructure</li>
          <li>IT & IoT Security</li>
          <li>Customized Software</li>
        </ul>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
