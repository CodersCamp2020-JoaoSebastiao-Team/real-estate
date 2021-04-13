import './index.scss'
import React, {useContext, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {EstateTypes, ListingStatusTypes} from '../../enums'
import {UserContext} from "../../userProvider";
import x from '../../asstets/images/x.jpg';


const ListingForm = () => {
    const {user} = useContext(UserContext)

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
                'Content-Type': 'application/json',
                'jwt': user.jwt,
                'jwt2': user.jwt2
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
    const handleImageUpload = () => {
        // @ts-ignore
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        console.log(files)
        formData.append('file', files[0]);
        // replace this with your upload preset name
        formData.append('upload_preset', 'ml_default');
        const options = {
            method: 'POST',
            body: formData,
        };
        return fetch('https://api.Cloudinary.com/v1_1/realestatepage/image/upload', options)
            .then(res => res.json())
            .then(res => {
                const images = listing.images;
                // @ts-ignore
                images.push(res.secure_url);
                setListing({
                    ...listing,
                    images: images
                })
            })
            .catch(err => console.log(err));
    }

    const removeImage = (index:number)=> {
        const newList = listing.images.filter((item,id) => id !== index);
        // @ts-ignore
        setListing({
            ...listing,
            images: newList
        })
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
                <Form.Group controlId="images">
                    <Form.Label>Images</Form.Label>
                    <Form.Control type="file"  aria-label="Recipient's username"
                                  aria-describedby="basic-addon2"
                                  onChange={handleImageUpload} >

                    </Form.Control>
                </Form.Group>

                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Submit
                </Button>
            </Form>
            <div className="image-container">
                {listing.images.length >0 && (
                    listing.images.map((url: string, index, images)=>{

                        return (
                        <div className='image-div'>
                            <div className='hidden-div'>
                                <button className="hidden-delete-button" onClick={()=>removeImage(index)}>X</button>
                            </div>
                            <img src={url} alt={x} width={"100px"} height={"100px"}/>

                        </div>)
                    })
                )}
            </div>


        </div>
    );
};
export default ListingForm;