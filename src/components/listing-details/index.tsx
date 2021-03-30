import './index.scss';
import React from 'react';
import listingProps from '../listing-details/listingProps'
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";


const ListingDetails = (props:listingProps) => {
  const images = [];
  if (props.url){
    for (const image of props.url){
      images.push({
        original: image,
        thumbnail: image
      })
    }
  }

    return (
        <>
      <div className="listing_details-wrapper" >
      <h5>See the details of our listing:</h5>
      <div className="galery-wrapper" style={{position: 'relative', margin: `${props.margin}`}}>
      <ImageGallery items={images} />
      </div>
      <div className="listing-description" style={{color: `${props.color}`}}>
            <p className="listing-price"><span>Price:</span>  {props.price}</p>
            <p className="listing-address"><span>Address:</span> {props.address}</p>
            <p className="listing-size"><span>Size:</span> {props.size}</p>
            <p className="listing-text"><span>Description: </span> {props.text}</p>
      </div>
      <div className="btn">{props.type === "forSale" ? "Buy" : props.type === "forRent" ? "Reserve" : "Reserved"}</div>
      </div>
      </>
    );
  };
  export default ListingDetails;