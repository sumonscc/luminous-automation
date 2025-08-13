import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function NewsEvents() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>নিউজ ও ইভেন্ট</h1>
        <p>আমাদের সর্বশেষ আপডেট দেখতে আমাদের <a href="https://www.facebook.com/LuminousAutomation" target="_blank" rel="noopener noreferrer">Facebook পেজ</a> ভিজিট করুন।</p>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
