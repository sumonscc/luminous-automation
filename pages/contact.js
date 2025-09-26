import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>যোগাযোগ করুন</h1>
        <ContactForm />
        <p>অথবা সরাসরি WhatsApp করুন: <strong>+8801911414150</strong></p>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
