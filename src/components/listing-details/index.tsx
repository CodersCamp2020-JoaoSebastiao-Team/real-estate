import './index.scss';
import React from 'react';
import listingProps from '../listing-details/listingProps'
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import { Link } from 'react-router-dom';
import Calendar from '../calendar'

const ListingDetails = (props: listingProps) => {
  const images = [];
  if (props.url) {
    for (const image of props.url) {
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
        <div className="galery-wrapper" style={{ position: 'relative', margin: `${props.margin}` }}>
          <ImageGallery items={images} />
        </div>
        <div className="listing-description" style={{ color: `${props.color}` }}>
          <p className="listing-price"><span>Price:</span><span>{props.price}</span></p>
          <p className="listing-address"><span>Address:</span><span>{props.address}</span></p>
          <p className="listing-size"><span>Size:</span><span>{props.size}</span></p>
          <p className="listing-text"><span>Description: </span><span>{props.text}</span></p>
        </div>
        <div>
          <div className="calendar" style={{display: props.type === "forSale" ? 'none' : props.type === "forRent" ? 'block' : 'none'}}><Calendar/></div>
          <div className="btn">{props.type === "forSale" ? "Buy" : props.type === "forRent" ? "Reserve" : "Reserved"}</div>
          <Link to="/contact"><button className="btn">Contact with agent</button></Link>
        </div>
      </div>
    </>
  );
};
export default ListingDetails;