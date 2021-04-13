import React from "react";
import './index.scss';


const Location:React.FC<{city: any ,inputProp:any, bedroom:any, hometype: any}> = ({ city, inputProp, bedroom, hometype }) => {
  return (
    <React.Fragment>
      <div className='filterContainer'>
        <h3>Location</h3>
        <label>City</label>
        <select className='select' name="city" onChange={inputProp} value={city}>
          <option value="All">All</option>
          <option value="Miami">Miami</option>
          <option value="Philadelphia">Philadelphia</option>
          <option value="New York">New York</option>
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