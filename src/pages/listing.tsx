import { useLocation } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react';
import listingProps from '../components/listing-details/listingProps'
import { IListing } from '../interfaces';
import ListingDetails from '../components/listing-details';
import Slider from '../components/slider'

const Listing = () => {
    const location = useLocation();
    const url = `https://coderscamp-real-estate.herokuapp.com/api${location.pathname}`;
    const [dataDetails, setdataDetails] = useState<IListing>();

    useEffect(() => {
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data.DATA);
                setdataDetails(data.DATA);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    let myProps: listingProps = { id: ``, width: "300px", height: "270px", url: dataDetails?.images!, margin: "10px", price: `${dataDetails?.description}`, address: `${dataDetails?.country} ${dataDetails?.city} ${dataDetails?.street}`, size: `${dataDetails?.status}`, color: "black" };
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                    <ListingDetails {...myProps} />
                </div>
                <div className="relatedListings">

                </div>
                <Slider />
            </div>
            
        </>
    );
};

export default Listing;