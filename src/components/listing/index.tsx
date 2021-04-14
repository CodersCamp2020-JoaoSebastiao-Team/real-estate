import './index.scss';
import React from 'react';
import listingProps from '../listing/listingProps'
import {Link} from 'react-router-dom';


const Listing = (props:listingProps) => {

    return (
        <>
      <div className="listing-wrapper" style={{width: `${props.width}`, height: `${props.height}`, position: 'relative', margin: `${props.margin}`}}>
        <div className="picture-wrapper" ><Link to={`/listing/${props.id}`}> <img className="listing-picture" src={props.url} alt='house for sale'></img></Link></div>
        <div className="listing-description" style={{position: 'absolute', bottom: '0px', color: `${props.color}`}}>
            <p className="listing-price"> {props.price}</p>
            <p className="listing-address"> {props.address}</p>
            <p className="listing-size"> {props.size}</p>
        </div>
      </div>
      </>
    );
  };
  export default Listing;