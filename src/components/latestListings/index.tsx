import './index.scss';
import Listing from '../listing'
import listingProps from '../listing/listingProps'
import React, { useState, useEffect, useRef } from 'react';
import { IListing } from '../../interfaces'

const LatestListings = () => {
    const url = `https://coderscamp-real-estate.herokuapp.com/api/listing`;
    const [data, setdata] = useState<IListing[]>([]);
    const size = 6;
    useEffect(() => {
        if (data.length === 0) {
            fetch(url, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    for (let i = 0; i < data.DATA.length; i++) {
                        for (let j = 0; j < data.DATA.length - i - 1; j++) {
                            if (data.DATA[j].modification_notes[0].modified_on < data.DATA[j + 1].modification_notes[0].modified_on) {
                                const temp = data.DATA[j + 1];
                                data.DATA[j + 1] = data.DATA[j];
                                data.DATA[j] = temp;
                            }
                        }
                    }
                    setdata(data.DATA);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, []);

    let myProps: listingProps = {id: "", width: "", height: "", url: "", margin: "0", price: "", address: "", size: "", color: "white" };
    return (
        <>
            <h5>See our latest listings!</h5>
            <div className="grid-container">
                {data.slice(0,size).map((listing: IListing, index) => (
                    <Listing key={index} {...myProps = {id: `${listing._id}`, width: "300px", height: "200px", url: `${listing.images[0]}`, margin: "0", price: `${listing.description}`, address: `${listing.country} ${listing.city} ${listing.street}`, size: `${listing.status}`, color: "white" }} />
                ))}
            </div>
        </>
    );
};
export default LatestListings;