import Listing from '../components/listing'
import listingProps from '../components/listing/listingProps'
import React, { useState, useEffect, useRef } from 'react';
import { IListing } from '../interfaces'
import ImageGallery from 'react-image-gallery';

const Buy = () => {
  const url = `https://coderscamp-real-estate.herokuapp.com/api/listing`;
  const [data, setdata] = useState<IListing[]>([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.length === 0) {
      fetch(url, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          setdata(data.DATA);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, []);

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
        <div id="page-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
          <h5>Real Estate & Homes For Sale</h5>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {data.map((listing: IListing, index) => (
              <Listing key={index} {...myProps = { id: `${listing._id}`, width: "300px", height: "270px", url: `${listing.images[0]}`, margin: "10px", price: `${listing.description}`, address: `${listing.country} ${listing.city} ${listing.street}`, size: `${listing.status}`, color: "black" }} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Buy;
