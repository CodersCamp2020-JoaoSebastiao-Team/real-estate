import './index.scss'
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import {userTypes} from '../../enums'
const RegisterPanel = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [type, setType] = useState("");
    const [username, setUsername] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event: any) {
        const url = `https://coderscamp-real-estate.herokuapp.com/api/register`;
        console.log("event: ", event);
        console.log("Submit event!!!",({
            name: event.target[0].defaultValue,
            surname: event.target[1].defaultValue,
            userType: event.target[2].value,
            username: event.target[3].defaultValue,
            email: event.target[4].defaultValue,
            password: event.target[5].defaultValue
            }));

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                name: event.target[0].defaultValue,
                surname: event.target[1].defaultValue,
                userType: event.target[2].value,
                username: event.target[3].defaultValue,
                email: event.target[4].defaultValue,
                password: event.target[5].defaultValue
                })
        })
        .then(response => response.json())
        .then(data => {
            if (data.savedUser._id.length > 0){
                console.log('Success:', data.savedUser._id );
            }
            else{
                console.log("Error!")
            }
        })
            .catch((error) => {
                console.error('Error:', error);
            });
        event.preventDefault();
    }
    return (
        <div className="register_details-wrapper" >
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="input"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="surname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                        type="text"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="type">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" as="select" aria-label="Recipient's username"
                                  aria-describedby="basic-addon2" value={type}
                                  onChange={(e) => setType(e.target.value)} >
                        <option value={userTypes.owner}>{userTypes.owner}</option>
                        <option value={userTypes.custom}>{userTypes.custom}</option>
                        <option value={userTypes.employee}>{userTypes.employee}</option>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Link to="/login"><p>I already have an account</p></Link>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Register
              </Button>
            </Form>
        </div>
    );
};
export default RegisterPanel;