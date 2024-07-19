import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVial } from '@fortawesome/free-solid-svg-icons'; // A more detailed icon
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <FontAwesomeIcon icon={faVial} className="logo-icon" />
        <Link to="/" className="logo">ChemAcademy</Link>
      </div>
      <nav className="nav-links">
        <Link to="/change-language" className="nav-link">Change Language</Link>
        <Link to="/sign-in" className="nav-link">Sign In</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
