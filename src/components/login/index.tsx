import './index.scss'
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

const LoginPanel = () => {
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