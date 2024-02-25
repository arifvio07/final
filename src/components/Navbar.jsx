import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`nav ${darkMode ? 'dark-mode' : ''}`}>
      <p className="logo-bar"><NavLink exact to="/">Galehpedia</NavLink></p>
      <div className="nav-menu">
        <ul>
          <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
          <li><NavLink to="/Shoping" activeClassName="active-link">Shoping</NavLink></li>
          <li><NavLink to="/promo" activeClassName="active-link">Promo</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
        </ul>
      </div>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
      </button>
    </nav>
  );
};

export default Navbar;
