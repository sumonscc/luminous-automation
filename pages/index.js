import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>Luminous Automation</title>
        <meta name="description" content="Smart Solutions for Bangladesh" />
      </Head>

      <Navbar />

      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>স্বাগতম Luminous Automation-এ</h1>
        <p>আমরা দিচ্ছি স্মার্ট বিল্ডিং, ফ্যাক্টরি ও সিকিউরিটি সলিউশন।</p>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
