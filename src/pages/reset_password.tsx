import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ResetPassword from '../components/reset_password'

const Reset = () => {
  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
    <ResetPassword />
    </div>
  );
};

export default Reset;
