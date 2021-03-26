import Listing from '../components/listing'
interface listingProps {
  width: string;
  height: string;
  url: string;
  margin: string;
  price: string;
  address: string;
  size: string;
}
const myProps: listingProps = { width: "300px", height: "300px", url: "https://gratka.pl/blog/wp-content/uploads/2019/07/5784b4194bbbf_o.jpg",margin: "10px",price: "300zł",address: "Miasto ul.Ulica 1",size: "127 m2" };
const Buy = () => {
  return(
    <div>
      <h2>Buy page</h2>
      <Listing {...myProps}/>
      <Listing {...myProps}/>
      <Listing {...myProps}/>
    </div>
  );
};

export default Buy;
