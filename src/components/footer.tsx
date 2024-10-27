"use client";
import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="footer-logo">Alyan Sheikh</h3>
          <p className="footer-text">Frontend Developer | Exploring AI, Web 3.0 & Metaverse</p>

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
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alyan Sheikh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
