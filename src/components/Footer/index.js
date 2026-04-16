import React,{ useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import Whatsapp from "../../assets/whatsapp.png";
import Facebook from "../../assets/Facebook.png";
import Youtube from "../../assets/youtube.png";
import X from "../../assets/x.png";

import "./styles.css";

const Footer = () => {

    return (
     <>

<footer className="footer_Design">
    
 

        <div class="footer-brand">
        

          <figure class="footer-img">
            <img src={logo} width="100"  aria-hidden="true" alt="logo in footer"/>
          </figure>
        </div>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Our Page</p>
          </li>

          <li>
            <a href="#" class="footer-link">Home</a>
          </li>

          <li>
            <a href="#" class="footer-link">Organize your Travel</a>
          </li>

          <li>
            <a href="#" class="footer-link">Bussines</a>
          </li>

          <li>
            <a href="#" class="footer-link">Reviews</a>
          </li>

        </ul>

        <ul class="footer-Social-Medias">
          <p class="footer-list-title">Social Medias</p>
        <div class="icons_medias">
            <li><img data-testid="testLogoW" src={Whatsapp} alt="whatsapp logo"/></li>
            <li><img src={Facebook} alt="facebook logo"/></li>
            <li><img src={Youtube} alt="youtube logo"/> </li>
            <li><img src={X} alt="x logo"/> </li>

          </div>
          </ul>
    
      
 
  </footer>

    </>
    )
}

export default Footer;
