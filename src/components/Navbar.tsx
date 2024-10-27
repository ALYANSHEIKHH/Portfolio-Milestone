"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/">
          <Image src="/logo (2).png" alt="Logo" className="logo-img" width={40} height={20} />
            <h1 className="logo-text">Alyan Sheikh</h1>
          </Link>
        </div>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
  <Link href="/" className="nav-item" onClick={() => setIsOpen(false)}>Home</Link>
  <Link href="/Project" className="nav-item" onClick={() => setIsOpen(false)}>Project</Link>
  <Link href="/contact" className="nav-item" onClick={() => setIsOpen(false)}>Contact</Link>
</nav>



        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={30} className="icon" /> : <IoMdMenu size={30} className="icon" />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
