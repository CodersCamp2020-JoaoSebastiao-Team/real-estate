import Listing from '../components/listing'
import listingProps from '../components/listing/listingProps'

const myProps: listingProps = { width: "300px", height: "270px", url: "https://gratka.pl/blog/wp-content/uploads/2019/07/5784b4194bbbf_o.jpg",margin: "10px",price: "300zł",address: "Miasto ul.Ulica 1",size: "127 m2", color: "black" };
const Buy = () => {
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2>Buy page</h2>
      <div>
        <Listing {...myProps}/>
        <Listing {...myProps}/>
        <Listing {...myProps}/>
      </div>

    </div>
  );
};

export default Buy;
