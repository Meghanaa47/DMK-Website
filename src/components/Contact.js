import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <form action="mailto:meghanakontham28@gmail.com" method="post" className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
        <div className="contact-info">
          <span>Or reach me directly at:</span> 
          <a href="mailto:meghanakontham28@gmail.com">meghanakontham28@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
