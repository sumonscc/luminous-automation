import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Products() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>আমাদের পণ্যসমূহ</h1>
        <ul>
          <li>Attendance Machine</li>
          <li>Access Controller</li>
          <li>CCTV Camera</li>
          <li>Home Security</li>
          <li>Detector</li>
          <li>Industrial Printer</li>
          <li>Solar</li>
          <li>Customized Software</li>
          <li>Licensed Software</li>
        </ul>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
