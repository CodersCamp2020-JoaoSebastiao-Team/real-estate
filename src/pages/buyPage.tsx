import React from 'react';
import Listing from '../components/listing'
import { IListing } from '../interfaces'
import listingProps from '../components/listing/listingProps'
import Filters from '../components/filters/Filters'




const BuyPage = ({data ,loading,inputChange,state}:any|IListing|boolean) =>{


    let myProps: listingProps = { id: "", width: "", height: "", url: "", margin: "10px", price: "", address: "", size: "", color: "black" };
    return (
        <>
          {loading && (
            <div id="page-loading" className="fa-5x">
    
              <i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: "5px", color: 'var(--dark-beige)' }}
              />
            </div>
          )}
    
          {!loading && (
    
           <div style={{display:'grid', gridTemplateColumns: '40rem 1fr'}}>
              <Filters inputChange={inputChange} stateProp={state} />
                  
    
            <div id="page-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
              <h5>Real Estate & Homes For Sale</h5>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                
                {data.map((filtered:any, index:any) => (
    
                  <Listing 
                   key={index} {...myProps = { id: `${filtered._id}`, width: "300px", height: "270px", url: `${filtered.images[0]}`, margin: "10px", price: `${filtered.price}`, address: `${filtered.country} ${filtered.city} ${filtered.street}`, size: `${filtered.status}`, color: "black" }} />
                ))}
    
    
              </div>
            </div>
    
            </div>
    
    
          )};
        </>
      );
};

export default BuyPage