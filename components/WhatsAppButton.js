export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801911414150"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        zIndex: 1000
      }}
    >
      📱 WhatsApp করুন
    </a>
  );
}
