import './index.scss'
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {EstateTypes, ListingStatusTypes} from '../../enums/index'

const ListingForm = () => {
    const [listing, setListing] = useState({
        description: '',
        country: '',
        city: '',
        street: '',
        zipCode: '',
        images: [],
        estateType: 'flat',
        listingStatusType: 'forRent'
    });

    function validateForm() {
        return listing.description.length > 0 && listing.city.length > 0;
    }

    const changeInput = (event: React.SyntheticEvent)=>{
        const {id, value} = event.target as HTMLInputElement;
        setListing({
            ...listing,
            [id]: value
        })
    }
    function handleSubmit(event: any) {
        const url = `https://coderscamp-real-estate.herokuapp.com/api/listing`;
        console.log(listing)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(listing)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data );
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        event.preventDefault();
    }
    return (
        <div className="register_details-wrapper" >
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="input"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={listing.description}
                        onChange={(e) => changeInput(e)}
                    />
                </Form.Group>
                <Form.Group controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={listing.country}
                        onChange={(e) => changeInput(e)}
                    />
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={listing.city}
                        onChange={(e) => changeInput(e)}
                    />
                </Form.Group>
                <Form.Group controlId="street">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                        type="text"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={listing.street}
                        onChange={(e) => changeInput(e)}
                    />
                </Form.Group>
                <Form.Group controlId="zipCode">
                    <Form.Label>Zip code (dd-ddd)</Form.Label>
                    <Form.Control
                        type="text"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={listing.zipCode}
                        onChange={(e) => changeInput(e)}
                    />
                </Form.Group>
                <Form.Group controlId="estateType">
                    <Form.Label>Estate Type</Form.Label>
                    <Form.Control type="text" as="select" aria-label="Recipient's username"
                                  aria-describedby="basic-addon2" value={listing.estateType}
                                  onChange={(e) => changeInput(e)} >
                        <option value={EstateTypes.flat}>{EstateTypes.flat}</option>
                        <option value={EstateTypes.garage}>{EstateTypes.garage}</option>
                        <option value={EstateTypes.house}>{EstateTypes.house}</option>
                        <option value={EstateTypes.premises}>{EstateTypes.premises}</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="listingStatusType">
                    <Form.Label>Listing Status Type</Form.Label>
                    <Form.Control type="text" as="select" aria-label="Recipient's username"
                                  aria-describedby="basic-addon2" value={listing.listingStatusType}
                                  onChange={(e) => changeInput(e)} >
                        <option value={ListingStatusTypes.forRent}>{ListingStatusTypes.forRent}</option>
                        <option value={ListingStatusTypes.forSale}>{ListingStatusTypes.forSale}</option>

                    </Form.Control>
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};
export default ListingForm;