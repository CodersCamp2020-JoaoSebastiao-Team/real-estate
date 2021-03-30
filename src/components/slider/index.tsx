import './index.scss';
import React from 'react';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";


function imageSlider() {
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
                <Slider {...settings}>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f8/52/08/lounge.jpg?w=900&h=-1&s=1"></img>
                            </div>
                            <div className="card-details">
                                <div className="listing-description">
                                    <p className="listing-price"><span>Price:</span>  </p>
                                    <p className="listing-address"><span>Address:</span> </p>
                                    <p className="listing-size"><span>Size:</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f8/52/08/lounge.jpg?w=900&h=-1&s=1"></img>
                            </div>
                            <div className="card-details">
                                <h2> John Doe</h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f8/52/08/lounge.jpg?w=900&h=-1&s=1"></img>
                            </div>
                            <div className="card-details">
                                <h2> John Doe</h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f8/52/08/lounge.jpg?w=900&h=-1&s=1"></img>
                            </div>
                            <div className="card-details">
                                <h2> John Doe</h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f8/52/08/lounge.jpg?w=900&h=-1&s=1"></img>
                            </div>
                            <div className="card-details">
                                <h2> John Doe</h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default imageSlider;