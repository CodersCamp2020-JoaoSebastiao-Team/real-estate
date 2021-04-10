import CardsSection from '../components/card-section'
import '../styles/partials/_typography.css'
import background from '../asstets/images/background.png';
const Services = () => {
    return(
      <div style={{ display: 'flex', flexDirection: 'column',backgroundImage: `url(${background})`, alignItems: 'center', minHeight: '80vh'}}>
              <CardsSection/>
      </div>
    );
  };
  export default Services;