import ContactForm from '../components/contact'

const Contact = () => {
  return (
    <div className="contact-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0', width: '100%', minHeight: '80vh'}}>
      <ContactForm />
    </div>
  );
}
export default Contact;