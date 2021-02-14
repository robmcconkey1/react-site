import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_GU5KHOzq0Hu9Re2UmjcaW");


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_4wdwg54', 'robtemplate', e.target, 'user_GU5KHOzq0Hu9Re2UmjcaW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <form onSubmit={sendEmail}>
     
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send Message" />
    </form>

    
  );
}