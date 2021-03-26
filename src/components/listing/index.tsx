import './index.scss';
import React from 'react';

interface listingProps {
    width: string;
    height: string;
    url: string;
    margin: string;
    price: string;
    address: string;
    size: string;
}
const Listing = (props:listingProps) => {
    return (
        <>
      <div className="listing-wrapper" style={{width: `${props.width}`, height: `${props.height}`, position: 'relative', margin: `${props.margin}`}}>
        <div className="picture-wrapper" > <img className="listing-picture" src={props.url}></img></div>
        <div className="listing-description" style={{position: 'absolute', bottom: '0px'}}>
            <p className="listing-price"> {props.price}</p>
            <p className="listing-address"> {props.address}</p>
            <p className="listing-size"> {props.size}</p>
        </div>
      </div>
      </>
    );
  };
  export default Listing;