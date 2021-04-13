import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginPanel from '../components/login'

const Login = () => {
  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
    <LoginPanel />
    </div>
  );
};

export default Login;
