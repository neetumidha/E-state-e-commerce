import React from 'react';
import './Navbar.css';
import { MdHomeWork } from "react-icons/md";
import { FaAngleDown, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="Top">
        <div className="logo">
          <MdHomeWork />
        </div>

        <div className="center">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/services">Services <FaAngleDown /></Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <div className="right">
            <button><Link to="/contact">CONTACT US</Link></button>
          </div>
        </div>
      </div>

      <div className="left-nav">
        <div className="logo-1">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
