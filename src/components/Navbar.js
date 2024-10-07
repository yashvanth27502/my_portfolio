import React from "react";
import { FaHome, FaPen, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMoon } from "react-icons/fa";
import "./NavbarStyle.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#" className="nav-icon"><FaHome /></a>
      <a href="https://github.com/yashvanth27502" className="nav-icon"><FaGithub /></a>
      <a href="https://linkedin.com/in/yashvanth-rv/" className="nav-icon"><FaLinkedin /></a>
      <a href="https://www.instagram.com/kozmoz_digitalsolutions/" className="nav-icon"><FaInstagram /></a>
      <a href="mailto:yashvanth27502@gmail.com" className="nav-icon"><FaEnvelope /></a>
    </div>
  );
};

export default Navbar;