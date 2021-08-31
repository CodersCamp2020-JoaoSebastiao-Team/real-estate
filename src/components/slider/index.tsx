import './index.scss';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useRef } from 'react';
import { IListing } from '../../interfaces';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';


function ImageSlider() {
    const url = `https://real-estate-api-coders-camp.herokuapp.com/api/listing`;
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

    let settings = {
        autoplay: true,
        slickPlay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 3000,
        pauseOnFocus: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }

    return (
        <div className="container-background">
            <h5> See our related listings:</h5>
            <div className="container carousel">
            <Router>
                    <Slider {...settings}>
                        {data.map((listing: IListing) => (
                                    <a href={`/listing/${listing._id}`}>
                                    <div className="card-wrapper">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src={listing.images[0]}></img>
                                            </div>
                                            <div className="card-details">
                                                <div className="listing-description">
                                                    <p className="listing-price"><span>Price:</span> {listing.description} </p>
                                                    <p className="listing-address"><span>Address:</span>{listing.country} {listing.city} {listing.street}</p>
                                                    <p className="listing-size"><span>Size:</span> {listing.status}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                        ))}
                    </Slider>
                    </Router>
            </div>
        </div>
    )
}

export default ImageSlider;