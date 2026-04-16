import React from "react";
import { NavLink } from "react-router-dom";

import Office_Entrance from "../../assets/Office_Entrance.jpg";
import Mision from "../../assets/Office_mision.jpg";
import Vision from "../../assets/Office_vision.png";
import Video_Promo from "../../assets/Video_Promocional.mp4";
import team_1 from "../../assets/team-image-1.jpg";
import team_2 from "../../assets/team-image-2.jpg";

import "./styles.css"

const About = () => {

    return (
     <>
        <body>

     

    <section class="gridSection">
        <div class="sectionDesc aboutusDesc">
            <h1 class="headline">
                The Company History
            </h1>
        </div>
       
        <div class="statusContainer">
            <div class="status">
                <h1><b>1.5M.</b> Clients</h1>
                <p>Satisfied to travel with us and exploring new worlds</p>
            </div>
    
            <div class="status">
                <h1><b>150+</b> Special Trips</h1>
                <p>We have around 150 trips designed especifically for you</p>
            </div>
    
            <div class="status">
                <h1><b>20+</b> Countries</h1>
                <p>It is the perfect spot to get started with your company.</p>
            </div>
        </div>

        <div class="sectionPic bouncepic" id="sectionPic">
            <img src={Office_Entrance} alt=" entrance of office"/>
        </div>

        <div class="sectionDesc aboutusDesc">
            <p class="sub-headline">
                "Travel" has grown from humble beginnings in 2010, located in CDMX, selling tours to people who seek unique experiences, generating revenues in excess of $750,000 per annum, by offering mid-range, semi-private and private tours for travelers seeking quality service at an affordable price.
            </p>
        </div>


    </section>

    <div class="services">
        <div class="aboutusimgContainer">
            <img src={Mision} alt="mision"/>
            <img src={Vision} alt="vision"/>
        </div>

        <div class="organizational">
            <div class="organizational-mision">
                
                <div class="organizational-description">
                    <h1>Mision</h1>
                    <p>We are serving our customers, searching, for their emtire satisfaction, providing, quality touristic services, and committing to our country's social, cultural, and environmental quality</p>
                </div>
            </div>

            <div class="organizational-vision">
                
                <div class="organizational-description">
                    <h1>Vision</h1>
                    <p>By next year, we will be among the very top businesses in Mexico's tourist industry, widely lauded for the excellence of our offerings and the positive impact we have on the nation's progress.</p>
                </div>
            </div>

          
        </div>
    </div>

   
    <section class="video" >
        <h1 class="video-header">Meet Us</h1>
        <div class="video-grid" aria-label="Video of meet us">
                <video  controls>
                <source src={Video_Promo} type="video/mp4"  alt="video promocional"/>
                </video> 
        </div>
    </section>

 
    
        </body>


     </>
    )
}

export default About;
