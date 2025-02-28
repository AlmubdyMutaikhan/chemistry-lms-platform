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
        <Link to="/" className="logo">Химиялық байланыстар</Link>
      </div>
      <nav className="nav-links">
        <a href="/contact" className="nav-link">Бізбен байланысу</a>
        <a href="/profile" className="nav-link">Профиль</a>
      </nav>
    </header>
  );
}

export default Navbar;
