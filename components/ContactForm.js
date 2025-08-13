export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/your-form-id"
      method="POST"
      style={{ maxWidth: '500px', margin: '2rem auto' }}
    >
      <h2>যোগাযোগ করুন</h2>
      <input type="text" name="name" placeholder="আপনার নাম" required />
      <input type="email" name="email" placeholder="আপনার ইমেইল" required />
      <textarea name="message" placeholder="আপনার বার্তা" required></textarea>
      <button type="submit">পাঠান</button>
    </form>
  );
}
