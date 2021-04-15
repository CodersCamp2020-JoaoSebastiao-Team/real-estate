import { useLocation } from 'react-router-dom'
import React, {useState, useEffect, useRef, useContext} from 'react';
import listingProps from '../components/listing-details/listingProps'
import { IListing } from '../interfaces';
import ListingDetails from '../components/listing-details';
import ListingDetailsEdit from '../components/listing-details-edit';
import Slider from '../components/slider'
import {UserContext} from "../userProvider";


const Listing = () => {
    const {user} = useContext(UserContext);
    const location = useLocation();
    const url = `https://coderscamp-real-estate.herokuapp.com/api${location.pathname}`;
    const [dataDetails, setdataDetails] = useState<IListing>();
    let [loading, setLoading] = useState(true);
    const [editable,setEditable] = useState<boolean>(false);

    useEffect(() => {
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setdataDetails(data.DATA);
                setLoading(false);
                console.log(data.DATA)
                if (data.DATA.author === user.owner_id){
                    setEditable(true);
                }
                const interval = setInterval(() => {

                    const button = document.getElementsByClassName("btn")[0];
                    console.log("button: ", button.textContent)
                    if (button && (button.textContent === ("Reserved" || "RESERVED"))) {
                        button.classList.add("blocked");
                    }
                    else {
                        button.classList.remove("blocked");
                    }
                }, 2000);
                setTimeout(() => {
                    clearInterval(interval);
                }, 5000)
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, []);

    let myProps: listingProps = { id: `${dataDetails?._id}`, width: "300px", height: "270px", url: dataDetails?.images!, margin: "10px", price: `${dataDetails?.estateType}`, address: `${dataDetails?.country} ${dataDetails?.city} ${dataDetails?.street}`, size: `${dataDetails?.status}`, color: "black", type: `${dataDetails?.listingStatusType}`, text: `${dataDetails?.description}` };
    return (
        <>
            {loading && (
                <div id="page-loading" className="fa-5x">
                    <i
                        className="fa fa-refresh fa-spin"
                        style={{ marginRight: "5px", color: 'var(--dark-beige)' }}
                    />
                </div>
            )}
            {!loading && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                        {editable?
                            <ListingDetailsEdit {...myProps}/>:
                            <ListingDetails {...myProps} />}
                    </div>
                    <Slider />
                </div>
            )}
        </>
    );
};

export default Listing;