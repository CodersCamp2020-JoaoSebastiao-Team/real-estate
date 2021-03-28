import Listing from '../components/listing'
import LatestListings from '../components/latestListings'
import listingProps from '../components/listing/listingProps'
import Hero from '../components/hero'
import CardsSection from '../components/card-section'
import '../styles/partials/_typography.css'


let myProps: listingProps = { width: "", height: "", url: "", margin: "10px", price: "", address: "", size: "", color: "black" };
const Home = () => {
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Hero/>
      <LatestListings />
      <CardsSection/>
    </div>
  );
};
export default Home;
