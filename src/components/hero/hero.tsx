import './hero.scss';
import React from 'react';

const Hero = () => {
    return(
        <div>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Find your place</h1>
                    <form className="hero-search-bar" action="">
                        <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Hero;
