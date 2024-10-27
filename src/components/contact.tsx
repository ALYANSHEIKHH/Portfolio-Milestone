"use client";
import React from 'react';
import './contact.css';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-description">Feel free to reach out via any of the platforms below or send me a direct message.</p>
      
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="form-input" required />
          <input type="email" placeholder="Your Email" className="form-input" required />
          <textarea placeholder="Your Message" className="form-textarea" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        
        <div className="contact-info">
          <h3 className="info-title">Contact Information</h3>
          <p>Email: alyansheikhh123@gmail.com</p>
          <p>Phone: 03253508399</p>
          
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/alyan-sheikh-1a26262b4" target="_blank" rel="noopener noreferrer" className="social-link">
              <AiFillLinkedin size={30} />
            </a>
            <a href="https://github.com/ALYANSHEIKHH" target="_blank" rel="noopener noreferrer" className="social-link">
              <AiFillGithub size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <AiFillInstagram size={30} />
            </a>
            <a href="https://wa.me/03253508399" target="_blank" rel="noopener noreferrer" className="social-link">
              <AiOutlineWhatsApp size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
