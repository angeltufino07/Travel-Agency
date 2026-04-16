import React from "react";
import { NavLink } from "react-router-dom";
import Playa from "../../assets/Playa.jpg";
import Los_cabos from "../../assets/Los_cabos.jpg";
import Acapulco from "../../assets/Acapulco.png";
import Cancun from "../../assets/Cancun.jpg";
import Ear_Money from "../../assets/Comisiones.png";
import Bussines from "../../assets/Affiliate.png";
import User1 from "../../assets/User_1.webp";
import User2 from "../../assets/User_2.png";

import "../../components/Header/styles.css"


const Home = () => {
    return (
 
    <main >
        <article className="Main_N">
             <section class="section Travel back_main" id="home">
                    <div class="container back_main">
                    <div class="Travel-content">
                        <h2 class="h1 Travel-title">Organize the travel that you have always wanted</h2>
                        <p class="section-text">
                        We have the experience to create your dream vacation. Get VIP recommendations & perks, a seamless booking experience.
                        Whether you are planning an adventure, family reunion, or just trip, we are your solution. 
                        </p>
                    </div>
                    <div class="Travel-banner">
                        <img src={Playa} width="804" height="643" alt="imagen principal del main"
                        class="w-100"/>
                    </div>

                    </div>
             </section>



      <section class="section service" id="services">
        <div class="container">

          <h2 class="h2 section-title">Organize your travel choosing one of the best places for this summer</h2>
          <ul class="service-list">
            <li>
              <div class="service-card">
                <figure class="card-banner">
                  <img src={Los_cabos} alt="Los cabos, Baja California"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="#" class="card-title" lang="es">Los Cabos, Baja California</a>
                  </h3>

                  <p class="card-text">
                    Los Cabos beckons visitors to an oasis where tranquility, adventure, and wellness fuse together to create an unparalleled experience.  Its awe-inspiring beaches, crystal-clear waters, and enchanting desert landscapes provide a haven for those seeking a rejuvenating escape from the chaotic humdrum of daily life
                  </p>

                  <a href="#" class="btn-link">
                    <span class="span">Learn More</span>

                   
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div class="service-card">
                <figure class="card-banner">
                  <img src={Acapulco} alt="Acapulco, Guerrero"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="#" class="card-title" lang="es" >Acapulco, Guerrero</a>
                  </h3>

                  <p class="card-text">
                    Acapulco is a resort with the best harbour on the Pacific coast of Mexico and one of the finest natural anchorages in the world.  Dance to the live music along the Zócalo, hunt down some of Mexico's best ceviche downtown or escape from the tourist hubbub in Punta Diamante's swank nightclubs – you can still hear echoes of the glamour.
                  </p>

                  <a href="#" class="btn-link">
                    <span class="span">Learn More</span>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div class="service-card">
                <figure class="card-banner">
                  <img src={Cancun} alt="Cancun"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="#" class="card-title" lang="es">Cancun, Quintana Roo</a>
                  </h3>
                  <p class="card-text">
                    Cancun is on the top of destinations of Mexico. 15 miles of soft sand beaches, mega-resorts with all-inclusive options, oceanfront swimming and pools.Add in resorts, shopping venues, bars and nightlife, and it's a wonder people ever leave. Visit Chichén Itzá, take a refreshing dip in a cenote, discover the colonial town of Valladolid and enjoy a buffet lunch.
                  </p>

                  <a href="#" class="btn-link">
                    <span class="span">Learn More</span>               
                  </a>

                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="section Comission" id="Comission">
        <div class="container">

          <div class="Comission-content">
            <h2 class="h2 section-title">No Job, Do not worry!</h2>
            <p class="section-text">
              In this world connected, your network could be your source of income.
            </p>
            <ul class="Comission-list">

              <li class="Comission-item">
                <img src={Ear_Money} aria-hidden="true"
                  class="bussines_logos"/>
                <h3 class="item-title">Earn money through commission</h3>
                <h4>Agents earn a percentage of the total price when they complete a sale
                </h4>
              </li>

              <li class="Comission-item">
                <img src={Bussines} aria-hidden="true"
                  class="bussines_logos"/>

                <h3 class="item-title">Affiliate marketing</h3>
                <h4>Earn commissions when you refer customers to your websites and those customers make purchases.
                </h4>
              </li>
            </ul>

            <h3 class="h3">
              <a class="card-title enterInfo">Enter your information to get more information</a>
            </h3>
            <form id="Travel_Form">
              <div>
                <label for="Username">Username</label>
                <input class="input-field" type="text" id="username" name="username" placeholder="Input an Username" />
              </div>
              <div>
                <label for="email">Email</label>
                <input class="input-field" type="email" id="email" name="email" placeholder="Input an Email"/>
              </div>
              <div>
                <label for="password">Password</label>
                <input class="input-field" type="password" id="password" name="password" placeholder="Input a valid Password"/>
              </div>
              <div>
                
                <input class="btn-primary" type="submit" value="Register"  />
              </div>
            </form>
  
            <div class="ErrorMs1" id="Error_Msg"></div>          
          </div>      
        </div>
      </section>


      <section id="reviews">
        <div class="container">

          <h2 class="h2 section-title">Reviews</h2>

          <p class="section-text">
            What people are saying about us
          </p>

          <ul class="about-list">

            <li>
              <div class="about-card about-card-1">

                <figure class="card-banner">
                  <img class="user_pic" src={User1} alt="Profile photo of user 1"/>
                </figure>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="#" class="card-title">Review 1</a>
                  </h3>

                  <p class="card-text">
                    Excellent experience, very well organized tour with precise and on-time pick-up points. New coach well maintained and drove excellently. He was an exceptional guide, engaging, knowledgeable and very friendly! Overall, a day organized down to the smallest detail and which.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div class="about-card about-card-2">

                <figure class="card-banner">
                  <img class="user_pic" src={User2} alt="Profile photo of user 2"/>
                </figure>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="#" class="card-title">Review 2</a>
                  </h3>

                  <p class="card-text">
                    The trip was fantastic! The guide was knowledgeable, patient and friendly. He answered all questions about the tour and was helpful with our requests and also he trained the kids and was very patient with them as they learnt thid the first time! They had so much fun that they did the fly boarding twice!
                  </p>
                </div>

              </div>
            </li>
          </ul>
        </div>
      </section>




        </article>
    </main>

    
  )
}
export default Home;
  