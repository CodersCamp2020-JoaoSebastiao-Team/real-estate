import './index.scss'
import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {EstateTypes, ListingStatusTypes} from '../../enums'
import {UserContext} from "../../userProvider";
import x from '../../asstets/images/x.jpg';
import {useHistory, useLocation} from 'react-router-dom';
import {IListing2} from '../../interfaces'

const ListingForm = () => {
    const location = useLocation();
    const history = useHistory();
    // @ts-ignore
    const { id } = useParams();
    const url = `https://coderscamp-real-estate.herokuapp.com/api/listing/${id}`;
    const {user} = useContext(UserContext)
    const [listing, setListing] = useState<IListing2>({
        description: '',
        country: '',
        city: '',
        street: '',
        zipCode: '',
        price: 0,
        livingSpace: 0,
        bedrooms: '',
        images: [],
        estateType: EstateTypes.flat,
        listingStatusType: ListingStatusTypes.forSale
    });
    useEffect(()=>{

        if (user.owner_id&&location.pathname.includes('/edit')){
            fetch(url, {
                method: 'GET',
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong');
                    }
                })
                .then(data => {
                    setListing({
                        description: data.DATA.description?data.DATA.description:"",
                        country: data.DATA.country?data.DATA.country:"",
                        city: data.DATA.city?data.DATA.city:"",
                        street: data.DATA.street?data.DATA.street:"",
                        zipCode: data.DATA.zipCode?data.DATA.zipCode:"00-000",
                        price: data.DATA.price?data.DATA.price:0,
                        livingSpace: data.DATA.livingSpace?data.DATA.livingSpace:0,
                        bedrooms: data.DATA.bedrooms?data.DATA.bedrooms:0,
                        images: data.DATA.images?data.DATA.images:[],
                        estateType: data.DATA.estateType?data.DATA.estateType:EstateTypes.flat,
                        listingStatusType: data.DATA.listingStatusType?data.DATA.listingStatusType:ListingStatusTypes.forSale
                    });
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

    },[])



    function validateForm() {
        return listing.description.length > 0 && listing.city.length > 0 && listing.zipCode.match(/^\d{2}-\d{3}$/);
    }

    const changeInput = (event: React.SyntheticEvent)=>{
        const {id, value} = event.target as HTMLInputElement;
        setListing({
            ...listing,
            [id]: value
        })
    }
    function handleSubmit(event: any) {
        console.log(listing.images)
        if (user.owner_id&&location.pathname.includes('/edit')){
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'jwt': user.jwt,
                    'jwt2': user.jwt2
                },
                body: JSON.stringify(listing)
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong');
                    }
                })
                .then(data => {
                    console.log('Success update:', data );
                    history.push(`/listing/${id}`)
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }else{
            const url = `https://coderscamp-real-estate.herokuapp.com/api/listing`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'jwt': user.jwt,
                    'jwt2': user.jwt2
                },
                body: JSON.stringify(listing)
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong');
                    }
                })
                .then(data => {
                    console.log('Success:', data );
                    history.push(`/listing/${data.DATA._id}`)
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

        event.preventDefault();
    }
    const handleImageUpload = () => {
        // @ts-ignore
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();

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
                        required
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
                        required
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
                        required
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
                        required
                        type="text"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={listing.street}
                        onChange={(e) => changeInput(e)}
                    />
                </Form.Group>
                <Form.Group controlId="livingSpace" >
                    <Form.Label>Living Space</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={listing.livingSpace}
                        onChange={(e) => changeInput(e)}
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={listing.price}
                        onChange={(e) => changeInput(e)}
                    />
                </Form.Group>
                <Form.Group controlId="bedrooms">
                    <Form.Label>Bedrooms number</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={listing.bedrooms}
                        onChange={(e) => changeInput(e)}
                    />
                </Form.Group>
                <Form.Group controlId="zipCode">
                    <Form.Label>Zip code (dd-ddd)</Form.Label>
                    <Form.Control
                        required
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
                                  onChange={(e) => changeInput(e)}
                                  style = { {fontSize: '2rem', height:'auto'}} >
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
                                  onChange={(e) => changeInput(e)}
                                  style = { {fontSize: '2rem', height:'auto'}} >
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
                            <div className='image-div' key={url}>
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








