import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Support() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>সাপোর্ট</h1>
        <p>আমরা ২৪/৭ টেকনিক্যাল সাপোর্ট প্রদান করি। আপনার যেকোনো সমস্যায় আমাদের সাথে যোগাযোগ করুন।</p>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
