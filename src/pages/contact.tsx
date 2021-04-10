import background from '../asstets/images/background.png';
import ContactForm from '../components/contact'

const Contact = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column',backgroundImage: `url(${background})`, alignItems: 'center', padding: '20px 0', width: '100%', minHeight: '80vh'}}>
      <ContactForm />
    </div>
  );
}
export default Contact;