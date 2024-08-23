import React from 'react';
import '../Style/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="quick-form">
          <h3>Quick Form</h3>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
            
            <button type="submit">SUBMIT NOW</button>
          </form>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/join">Join Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/donate">Donate Us</a></li>
          </ul>
        </div>

        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>
            Amreli
          </p>
          <p>
            +91 8306309039 / 8619449634
          </p>
          <p>
            <a href="mailto:sriramgaushalatrust173@gmail.com">sriramgaushalatrust173@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
