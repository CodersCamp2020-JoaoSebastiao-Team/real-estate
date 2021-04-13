import Calendar from '../components/calendar'
import listingProps from '../components/listing-details/listingProps'

import ListingForm from "../components/listingForm";
import React from "react";

const Sell = () => {
  return(
  <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2>Sell page</h2>
        <ListingForm />
    </div>
      <Calendar/>
  </div>
  );
};
export default Sell;
