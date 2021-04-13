import Calendar from '../components/calendar'
import listingProps from '../components/listing-details/listingProps'


const Sell = () => {
  return(
  <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2>Sell page</h2>
    </div>
      <Calendar/>
  </div>
  );
};
export default Sell;
