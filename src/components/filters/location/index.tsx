import React, {useState, useEffect} from "react";
import { IListing } from '../../../interfaces'
import Listing from "../../listing";

import './index.scss';


const Location:React.FC<{city: any ,inputProp:any, bedroom:any, hometype: any}> = ({ city, inputProp, bedroom, hometype }) => {
  
  const url = `https://coderscamp-real-estate.herokuapp.com/api/listing`;
  const [data, setdata] = useState<IListing[]>([]);
  
  useEffect(() => {
    if (data.length === 0) {
      fetch(url, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          setdata(data.DATA);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, []);


  const cityOptions = Array.from(new Set(data.map(( { city } ) => city)));
  
  
    return (
    <React.Fragment>
      <div className='filterContainer'>
        <h6>Location</h6>
        <label>City</label>
        <select className='select' name="city" onChange={inputProp} value={city}>
        <option value="All">All</option>
          {cityOptions.map ((city) => (
            <option value={city}>{city}</option>
          ))}
        </select>
        <label>Hometype</label>
        <select className='select' name="hometype" onChange={inputProp} value={hometype}>
          <option value="All">All</option>
          <option value="Apartment">Apartment</option>
          <option value="Studio">Studio</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
        </select>
        <label>Bedroom</label>
        <select className='select' name="bedroom" onChange={inputProp}>
          <option value="All">All</option>
          <option value="1">1+ Bedroom</option>
          <option value="2">2+ Bedrooms</option>
          <option value="3">3+ Bedrooms</option>
          <option value="4">4+ Bedrooms</option>
          <option value="5">5+ Bedrooms</option>
        </select>
      </div>
    </React.Fragment>
  );
};

export default Location;