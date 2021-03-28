import './index.scss';
import Listing from '../listing'
import listingProps from '../listing/listingProps'
import React, { useState, useEffect, useRef } from 'react';
import { IListing } from '../../interfaces'

const bubbleSort = (arr: any) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

const LatestListings = () => {
    const url = `https://coderscamp-real-estate.herokuapp.com/api/listing`;
    const [data, setdata] = useState<IListing[]>([])
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
                    console.log("data: ", data.DATA);
                    setdata(data.DATA);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, []);

    let myProps: listingProps = { width: "300px", height: "202px", url: "https://gratka.pl/blog/wp-content/uploads/2019/07/5784b4194bbbf_o.jpg", margin: "0", price: "300zł", address: "Miasto ul.Ulica 1", size: "127 m2", color: "white" };
    return (
        <>
            <div className="grid-container" style={{ width: '100%', justifyContent: 'center', display: 'grid', gridTemplateColumns: 'repeat(3,300px)', gridTemplateRows: 'repeat(3,200px)', marginTop: '30px' }}>
                {data.map((user: IListing, index) => (
                    <Listing key={index} {...myProps = { width: "300px", height: "270px", url: "https://gratka.pl/blog/wp-content/uploads/2019/07/5784b4194bbbf_o.jpg", margin: "10px", price: `${user.description}`, address: `${user.country} ${user.city} ${user.street}`, size: `${user.status}`, color: "black" }} />
                ))}
            </div>
        </>
    );
};
export default LatestListings;