import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/" className="logo">
            CountryPage
          </Link>
        </div>

        <ul className="nav__ul">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfalio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
