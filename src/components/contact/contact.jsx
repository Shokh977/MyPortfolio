import React, { Component } from "react";
import "./contact.css";
import { Input } from "../UI/Input";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    console.log(data, "data from the form");
    event.target.reset()
  };
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get in Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            {" "}
            Don't like forms? send me an 
            <a href="mailto:shokhtv7165@gmail.com" className="email">
              email.
            </a>
          </p>
        </div>

        <form
          action=""
          className="contact__form"
          netlify="true"
          onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <Input name="name" type="text" placeholder="your name" required />
            <Input
              name="email"
              type="email"
              required
              placeholder="your email"
            />
            <Input name="subject" type="text" required placeholder="subject" />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea 
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Leave your message"></textarea>
          </div>
          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
