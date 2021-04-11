import './index.scss'
import React from 'react';
import emailjs from 'emailjs-com';
import background from '../asstets/images/background.png';

const ContactForm = () => {
  function sendEmail(e: any) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_o2vvprg', 'template_bj0cimj', e.target, 'user_m3DpFoPmnhavjj56KHKAl')
      .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="contact_form-wrapper">
      <h5>We are here for you! We will answer all your questions.</h5>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="html_message" />
        <input type="submit" value="Send" className="contact-button"/>
      </form>
    </div>
  );
}
export default ContactForm;