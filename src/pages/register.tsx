import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import RegisterPanel from '../components/register'

const Register = () => {
  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
    <RegisterPanel />
    </div>
  );
};

export default Register;