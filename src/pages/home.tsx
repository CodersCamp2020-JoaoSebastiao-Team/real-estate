import Listing from '../components/listing'
import listingProps from '../components/listing/listingProps'
import Hero from '../components/hero'
import CardsSection from '../components/about-section'


const myProps: listingProps = { width: "300px", height: "202px", url: "https://gratka.pl/blog/wp-content/uploads/2019/07/5784b4194bbbf_o.jpg",margin: "0",price: "300zł",address: "Miasto ul.Ulica 1",size: "127 m2" , color: "white"};
const Home = () => {
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Hero/>
      <div className="grid-container" style= {{ width: '100%', justifyContent:'center', display: 'grid', gridTemplateColumns: 'repeat(3,300px)',gridTemplateRows: 'repeat(3,200px)', marginTop: '30px'}}>
      <Listing {...myProps}/>
      <Listing {...myProps}/>
      <Listing {...myProps}/>
      <Listing {...myProps}/>
      <Listing {...myProps}/>
      <Listing {...myProps}/>
      </div>
      <CardsSection/>
    </div>
  );
};
export default Home;
