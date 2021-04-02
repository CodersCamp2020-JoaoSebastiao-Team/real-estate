import React, {useState, useRef} from "react"; 
// swr- fetching api using hooks
import useSwr from "swr"; 
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import './index.scss';

const fetcher = (...args) => fetch(...args).then(response => response.json());

//component to render a marker on a map. to a market we attach lat and lng that are used later to pin on a map
const Marker = ( {children} ) => children;

function Map() {   
    //map setup
    const mapRef = useRef();
    const [zoom, setZoom] = useState(10);
    const [bounds, setBounds] = useState(null);

    //load and format data
    const url = `https://coderscamp-real-estate.herokuapp.com/api/listing`;
    const {data, error} = useSwr(url, fetcher);
    const records = data && !error ? data.slice(10) : [];

    //build clusters 


    return (
        <div style={ {height: "50vh", width:'50%'} }>
            <GoogleMapReact 
                bootstrapURLkey = { {key: process.env.REACT_APP_GOOGLE_KEY}}
                defaultCenter = { {lat: 52.6376, lng: -1.135171 }}
                defaultZoom = {10}
             >
                {records.map(record => {
                    <Marker 
                        key={record.id} 
                        lat={record.location.lat} 
                        lng={record.location.lng}
                    >
                        <button className="record-marker">
                            <img src="./house-icon.svg" alt="house marker"/>
                        </button>

                    </Marker>
                })}
            </GoogleMapReact>
        </div>
    )
}

export default Map;
 
