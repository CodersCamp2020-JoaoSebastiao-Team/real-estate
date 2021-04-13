import Listing from '../components/listing'
import Filters from '../components/filters/Filters'
import listingProps from '../components/listing/listingProps'
import React, { useState, useEffect, useRef } from 'react';
import { IListing } from '../interfaces'
import ImageGallery from 'react-image-gallery';

const Buy = () => {
  const url = `https://coderscamp-real-estate.herokuapp.com/api/listing`;
  const [data, setdata] = useState<IListing[]>([]);
  let [loading, setLoading] = useState(true);
  const [state, setFilterState] = useState({
    data,
    city: "",
    hometype: "",
    bedroom: "",
    minPrice: 0,
    maxPrice: 9999999,
    minFloorSpace: 0,
    maxFloorSpace: 999999,
  });

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

  const inputChange = (event: any): void => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setFilterState({ ...state, [name]: value });
  };


  let filteredData = state.data.filter(data => {
    // SORT BY CITY
    if (state.city !== "") {
      return data.city === state.city;
    }
    // SORT BY HOMETYPE
    if (state.hometype !== "") {
      return data.estateType === state.hometype ? data.estateType === state.hometype : "no results found";
    }
    // SORT BY BEDROOMS
    if (state.bedroom !== "") {
      return data.bedrooms >= state.bedroom;
    }

    //SHOW LISTINGS IN RANGES FROM ...  TO ...
    return (
      data.price >= state.minPrice &&
      data.price <= state.maxPrice &&
      data.livingSpace >= state.minFloorSpace &&
      data.livingSpace <= state.maxFloorSpace
    );
  });


  //od tego momentu nie wiem jak polączyć ze sobą te filtrowania

  //czy tu jeszcze trzeba zrobić tak: ????
  const listingsItem = filteredData.map((item, id) => {
    return (
      <ListingItem
        key={id}
        city={item.city}
        bedrooms={item.bedrooms}
        price={item.price}
        floorspace={item.livingSpace}
        hometype={item.estateType}
      />
    );
  });



  let myProps: listingProps = { id: "", width: "", height: "", url: "", margin: "10px", price: "", address: "", size: "", color: "black" };
  
  
  return (
    <>
     <Filters inputChange={inputChange} stateProp={state} />
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
            <Listing  
                inputChange={inputChange}
                filteredData={filteredData}>
            </Listing>

            

          
            {/* {data.map((listing: IListing, index) => (
              <Listing key={index} {...myProps = { id: `${listing._id}`, width: "300px", height: "270px", url: `${listing.images[0]}`, margin: "10px", price: `${listing.description}`, address: `${listing.country} ${listing.city} ${listing.street}`, size: `${listing.status}`, color: "black" }} />
            ))} */}


          </div>
        </div>
      )}
    </>
  );
};

export default Buy;
