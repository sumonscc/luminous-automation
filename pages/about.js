import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>আমাদের সম্পর্কে</h1>
        <p>
          Luminous Automation একটি প্রযুক্তি-ভিত্তিক প্রতিষ্ঠান, যা স্মার্ট বিল্ডিং, ফ্যাক্টরি, এবং সিকিউরিটি সলিউশন প্রদান করে।
        </p>
        <h2>Vision</h2>
        <p>বাংলাদেশে প্রযুক্তির মাধ্যমে নিরাপদ ও স্মার্ট ভবিষ্যৎ গঠন।</p>
        <h2>Core Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
        </ul>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
