import './index.scss';
import React, {useContext} from 'react';
import listingProps from '../listing-details/listingProps'
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import { Link } from 'react-router-dom';
import {userTypes} from "../../enums";
import {UserContext} from "../../userProvider";

const ListingDetailsEdit = (props: listingProps) => {
  const images = [];
  const {user} = useContext(UserContext)
  const url = `https://real-estate-api-coders-camp.herokuapp.com/api/listing/${props.id}`;
  if (props.url) {
    for (const image of props.url) {
      images.push({
        original: image,
        thumbnail: image
      })
    }
  }

  const handleDelete = ()=>{
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'jwt': user.jwt,
        'jwt2': user.jwt2
      },
    })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then(data => {
          if (data) {
            console.log('Success:', data);
          }
          else {
            console.log("Error!")
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
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
          <Link to={`/edit/${props.id}`}><button className="btn">Update</button></Link>
          <Link to="/account/listings"><button className="btn" onClick={handleDelete}>Delete</button></Link>
        </div>
      </div>
    </>
  );
};
export default ListingDetailsEdit;