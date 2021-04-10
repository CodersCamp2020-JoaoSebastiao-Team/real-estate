import './index.scss'
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const LoginPanel = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function HandleSubmit(event: any) {
        const url = `https://coderscamp-real-estate.herokuapp.com/api/login`;
        console.log("Submit event!!!", event.target[0].defaultValue);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: event.target[0].defaultValue, password: event.target[1].defaultValue, })
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log('Success:', data);
                }
                else {
                    console.log("Error!")
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        event.preventDefault();
    }
    return (
        <div className="login_details-wrapper" >
            <Form onSubmit={HandleSubmit}>
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
                <Link to="/reset_password"><p>I forgot password</p></Link>
                <Link to="/register"><p>I want to create account</p></Link>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
              </Button>
            </Form>
        </div>
    );
};
export default LoginPanel;