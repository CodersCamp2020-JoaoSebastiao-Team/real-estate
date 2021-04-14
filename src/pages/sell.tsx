import ListingForm from "../components/listingForm";
import React from "react";


const Sell = () => {

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2>Sell page</h2>
            <ListingForm/>
        </div>
    );
};
export default Sell;