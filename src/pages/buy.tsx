import Listing from '../components/listing'
import listingProps from '../components/listing/listingProps'
import React, { useState, useEffect, useRef } from 'react';
import { IListing } from '../interfaces'

const Buy = () => {
  const url = `https://coderscamp-real-estate.herokuapp.com/api/listing`;
  const [data, setdata] = useState<IListing[]>([])

  useEffect(() => {
    if (data.length === 0) {
      fetch(url, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data.DATA);
          setdata(data.DATA);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, []);

  let myProps: listingProps = { width: "", height: "", url: "", margin: "10px", price: "", address: "", size: "", color: "black" };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Buy page</h2>
      <div>
        {data.map((user: IListing, index) => (
          <Listing key={index} {...myProps = { width: "300px", height: "270px", url: "https://gratka.pl/blog/wp-content/uploads/2019/07/5784b4194bbbf_o.jpg", margin: "10px", price: `${user.description}`, address: `${user.country} ${user.city} ${user.street}`, size: `${user.status}`, color: "black" }} />
        ))}
      </div>

    </div>
  );
};

export default Buy;
