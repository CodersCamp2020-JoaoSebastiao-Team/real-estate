import './index.scss'
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event: any) {
        event.preventDefault();
    }
    return (
        <div className="reset_password_details-wrapper" >
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
                <Link to="/login"><p>I remembered the password</p></Link>
                <Link to="/register"><p>I want to create new account</p></Link>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Reset password
              </Button>
            </Form>
        </div>
    );
};
export default ResetPassword;