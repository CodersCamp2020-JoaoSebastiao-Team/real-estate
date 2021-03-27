import './index.scss';
import React from 'react';
import { HiSearch } from "react-icons/hi";

const Hero = () => {
    return(
        <div>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Find your place</h1>
                    <form className="hero-search-bar" action="">
                        <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit">
                            <HiSearch/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Hero;
