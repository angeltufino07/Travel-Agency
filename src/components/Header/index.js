import React,{ useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import Menu from "../../assets/Menu.png"
import Close from "../../assets/Close.png"
import "./styles.css"






const Header = () => {
  
  return (

  <div className="container">  
  
    <div className="header">
        <div class="header-container">  
                <div id="logo">
                    <a href="#">
                        <img className="header-logo" alt="logo principal" src={logo} />
                    </a> 
                </div>
                <nav class="navbar container" data-navbar>
        <ul class="navbar-list">

          <li >
            <a href="/" class="navbar-link" data-nav-link>Home</a>
          </li>

          <li >
            <a href="/#services" class="navbar-link" data-nav-link>Organize your Travel</a>
          </li>

          <li >
            <a href="/#Comission" class="navbar-link" data-nav-link>Bussines</a>
          </li>

          <li >
            <a href="/#reviews" class="navbar-link" data-nav-link>Reviews</a>
          </li>

          <li >
            <a href="/travels" class="navbar-link" data-nav-link>Travels</a>
          </li>
          
          <li >
            <a href="/about" class="navbar-link" data-nav-link>About Us</a>
          </li>
        </ul>
      </nav>



 
      
 
        </div>
    </div>


    
    </div>
  );
};

export default Header;
