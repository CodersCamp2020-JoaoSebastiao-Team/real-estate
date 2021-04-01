import './index.scss'
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const RegisterPanel = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event: any) {
        event.preventDefault();
    }
    return (
        <div className="listing_details-wrapper" >
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                </Form.Group>
                <Form.Group controlId="surname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                </Form.Group>
                <Form.Group controlId="type">
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                </Form.Group>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
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