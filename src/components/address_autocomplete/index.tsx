import './index.scss';
import React, { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";



function AddressAutocomplete() {
    const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })

    const handleSelect = async (value: string) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]); //{lat: number, lng: number}
        setAddress(value);
        setCoordinates(latLng);

    }
    return(
        <div>
            <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                {({getInputProps, suggestions, getSuggestionItemProps, loading }) =>(
                    <div>
                        <input {...getInputProps({placeholder: "Type address here", className: 'location-search-input'})}/>

                        {/* this is a div for suggestions from autocomplete */}
                        <div className="autocomplete-dropdown-container">
                            {loading ? <div>..loading</div> : null}

                            {suggestions.map( (suggestion: any) => {
                                const style = { backgroundColor: suggestion.active ? '#41b6e7' : '#f2f2f2' };

                                return <div {...getSuggestionItemProps(suggestion, {style})}>
                                            {suggestion.description}
                                       </div>
                            })}
                        </div>
                    </div>
                ) }
            </PlacesAutocomplete>

        </div>
    )
}

export default AddressAutocomplete;