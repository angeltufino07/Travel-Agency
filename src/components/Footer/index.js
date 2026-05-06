import React from "react";
// FIXED: NavLink was imported but never used — now actively used for internal navigation
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Whatsapp from "../../assets/whatsapp.png";
import Facebook from "../../assets/Facebook.png";
import Youtube from "../../assets/youtube.png";
import X from "../../assets/x.png";
import "./styles.css";

const Footer = () => {
  return (
    // FIXED: Removed unnecessary React Fragment — footer is the single root element
    <footer className="footer_Design">

      <div className="footer-brand">
        <figure className="footer-img">
          {/* FIXED: Added descriptive alt text for accessibility */}
          <img src={logo} width="100" alt="Travel Agency logo" />
        </figure>
      </div>

      {/* FIXED: Changed class= to className= — JSX requires className, not class */}
      <ul className="footer-list">
        <li>
          <p className="footer-list-title">Our Page</p>
        </li>
        {/* FIXED: Replaced <a href="#"> with <NavLink> — prevents full page reload
            href="#" does nothing. NavLink enables React Router client-side navigation */}
        <li>
          <NavLink to="/" className="footer-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/#services" className="footer-link">Organize your Travel</NavLink>
        </li>
        <li>
          <NavLink to="/#Comission" className="footer-link">Bussines</NavLink>
        </li>
        <li>
          <NavLink to="/#reviews" className="footer-link">Reviews</NavLink>
        </li>
      </ul>

      <ul className="footer-Social-Medias">
        {/* FIXED: <p> moved inside <li> — <ul> only accepts <li> as direct children */}
        <li>
          <p className="footer-list-title">Social Medias</p>
        </li>
        <div className="icons_medias">
          {/* FIXED: Wrapped images in <a> tags — icons were not clickable before */}
          {/* FIXED: Added target="_blank" to open in new tab */}
          {/* FIXED: Added rel="noreferrer" — required with target="_blank" for security
              Without it, the external page can access and redirect your tab (tabnapping vulnerability) */}
          <li>
            <a href="https://wa.me/" target="_blank" rel="noreferrer">
              <img data-testid="testLogoW" src={Whatsapp} alt="Whatsapp" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={Facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src={Youtube} alt="YouTube" />
            </a>
          </li>
          <li>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <img src={X} alt="X" />
            </a>
          </li>
        </div>
      </ul>

    </footer>
  );
};

export default Footer;