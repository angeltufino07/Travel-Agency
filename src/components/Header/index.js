import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles.css";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-container">
          <div id="logo">
            <NavLink to="/">
              <img className="header-logo" alt="Travel Agency logo" src={logo} />
            </NavLink>
          </div>
          <nav className="navbar container">
            <ul className="navbar-list">
              <li>
                <NavLink to="/" className="navbar-link">Home</NavLink>
              </li>
              <li>
                <NavLink to="/#services" className="navbar-link">Organize your Travel</NavLink>
              </li>
              <li>
                <NavLink to="/#Comission" className="navbar-link">Bussines</NavLink>
              </li>
              <li>
                <NavLink to="/#reviews" className="navbar-link">Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/travels" className="navbar-link">Travels</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="navbar-link">About Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;