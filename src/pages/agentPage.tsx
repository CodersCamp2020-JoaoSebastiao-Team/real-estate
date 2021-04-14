import React from 'react';
import Listing from '../components/listing'
import { IListing } from '../interfaces'
import listingProps from '../components/listing/listingProps'


const BuyPage = ({data ,loading}:any|IListing|boolean) =>{
    let myProps: listingProps = { id: "", width: "", height: "", url: "", margin: "10px", price: "", address: "", size: "", color: "black" };
    return (
        <>
        {loading && (
            <div id="page-loading" className="fa-5x" >
            <i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: "5px", color: 'var(--dark-beige)',display:'flex',  justifyContent: 'center' }}
            />
            </div>
        )}
          {!loading && (
            <div id="page-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
              <h5>Real Estate & Homes For Sale</h5>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
    
                {data.map((listing: IListing, index:any) => (
                    <Listing key={index} {...myProps = { id: `${listing._id}`, width: "300px",
                     height: "270px", url: `${listing.images[0]}`, margin: "10px", price: `${listing.description}`, 
                     address: `${listing.country} ${listing.city} ${listing.street}`, size: `${listing.status}`, color: "black" }} />
                ))}
              </div>
            </div>
          )}
    
        </>
      );
};

export default BuyPage