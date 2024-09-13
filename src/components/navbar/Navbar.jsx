// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./Style.css";
import navlogo from "../../assets/navlogo.png";
import navIcon from "../../assets/navIcon.svg";

function Navbar() {
  const [menuListOpen, setMenuListOpen] = useState(false);

  const toggleMenu = () => {
    setMenuListOpen(!menuListOpen);
  };
  const closeMenu=()=>{
    setMenuListOpen(false)
  }

  return (
    <div id="navbar" className=' py-4'>
    <div className='container mx-auto flex justify-between items-center'>
      <div className="navlogo mx-4">
        <img className="navlogoimg" src={navlogo} alt="Logo" />
        <div className="navlogotext">
          <h1>EXCELLENCE</h1>
          <h3>CENTRE DENTAIRE</h3>
        </div>
        <div className={`bx bx-menu ${menuListOpen ? 'open' : ''}`} id="menu-icon" onClick={toggleMenu}>
          <img className="navIcon" src={navIcon} alt="Icon" />
        </div>
      </div>
      <nav className={`navlist ${menuListOpen ? 'open' : ''}`}>
        <ul id="menuList">
          <li><a href="#HomePage" className='font-semibold pb-6' onClick={closeMenu}>Home</a></li>
          <li><a href="#Services" className='font-semibold' onClick={closeMenu}>Services</a></li>
          <li><a href="#Patients" className='font-semibold' onClick={closeMenu}>Our Patients</a></li>
          <li><a href="#Aboutus" className='font-semibold' onClick={closeMenu}>About Us</a></li>
          <li><a href="#contact" className='font-semibold' onClick={closeMenu}>Contact Us</a></li>
        </ul>
      </nav>
      </div>
    </div>
  );
}

export default Navbar;
