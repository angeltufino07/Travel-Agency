import React from "react";
// FIXED: Removed NavLink — imported but never used
import Playa from "../../assets/Playa.jpg";
import Los_cabos from "../../assets/Los_cabos.jpg";
import Acapulco from "../../assets/Acapulco.png";
import Cancun from "../../assets/Cancun.jpg";
import Ear_Money from "../../assets/Comisiones.png";
import Bussines from "../../assets/Affiliate.png";
import User1 from "../../assets/User_1.webp";
import User2 from "../../assets/User_2.png";
import "../../components/Header/styles.css";

const Home = () => {
  return (
    <main>
      {/* FIXED: classNameName was a typo — corrected to className */}
      <article className="Main_N">

        <section className="section Travel back_main" id="home">
          <div className="container back_main">
            <div className="Travel-content">
              <h2 className="h1 Travel-title">
                Organize the travel that you have always wanted
              </h2>
              <p className="section-text">
                We have the experience to create your dream vacation. Get VIP
                recommendations & perks, a seamless booking experience. Whether
                you are planning an adventure, family reunion, or just a trip,
                we are your solution.
              </p>
            </div>
            <div className="Travel-banner">
              {/* FIXED: alt text translated to English */}
              <img
                src={Playa}
                width="804"
                height="643"
                alt="Beach destination"
                className="w-100"
              />
            </div>
          </div>
        </section>

        <section className="section service" id="services">
          <div className="container">
            <h2 className="h2 section-title">
              Organize your travel choosing one of the best places for this summer
            </h2>
            <ul className="service-list">

              <li>
                <div className="service-card">
                  <figure className="card-banner">
                    <img src={Los_cabos} alt="Los Cabos, Baja California" className="w-100" />
                  </figure>
                  <div className="card-content">
                    <h3 className="h3">
                      {/* FIXED: Removed lang="es" — belongs on <html> tag only */}
                      {/* FIXED: Replaced href="#" with a real route */}
                      <a href="/travels" className="card-title">Los Cabos, Baja California</a>
                    </h3>
                    <p className="card-text">
                      Los Cabos beckons visitors to an oasis where tranquility,
                      adventure, and wellness fuse together to create an
                      unparalleled experience. Its awe-inspiring beaches,
                      crystal-clear waters, and enchanting desert landscapes
                      provide a haven for those seeking a rejuvenating escape.
                    </p>
                    <a href="/travels" className="btn-link">
                      <span className="span">Learn More</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <figure className="card-banner">
                    <img src={Acapulco} alt="Acapulco, Guerrero" className="w-100" />
                  </figure>
                  <div className="card-content">
                    <h3 className="h3">
                      <a href="/travels" className="card-title">Acapulco, Guerrero</a>
                    </h3>
                    <p className="card-text">
                      Acapulco is a resort with the best harbour on the Pacific
                      coast of Mexico and one of the finest natural anchorages
                      in the world. Dance to the live music along the Zócalo,
                      hunt down some of Mexico's best ceviche downtown or escape
                      from the tourist hubbub in Punta Diamante's swank
                      nightclubs.
                    </p>
                    <a href="/travels" className="btn-link">
                      <span className="span">Learn More</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <figure className="card-banner">
                    <img src={Cancun} alt="Cancun, Quintana Roo" className="w-100" />
                  </figure>
                  <div className="card-content">
                    <h3 className="h3">
                      <a href="/travels" className="card-title">Cancun, Quintana Roo</a>
                    </h3>
                    <p className="card-text">
                      Cancun is on the top of destinations of Mexico. 15 miles
                      of soft sand beaches, mega-resorts with all-inclusive
                      options, oceanfront swimming and pools. Visit Chichén
                      Itzá, take a refreshing dip in a cenote, discover the
                      colonial town of Valladolid and enjoy a buffet lunch.
                    </p>
                    <a href="/travels" className="btn-link">
                      <span className="span">Learn More</span>
                    </a>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </section>

        <section className="section Comission" id="Comission">
          <div className="container">
            <div className="Comission-content">
              <h2 className="h2 section-title">No Job, Do not worry!</h2>
              <p className="section-text">
                In this connected world, your network could be your source of income.
              </p>
              <ul className="Comission-list">
                <li className="Comission-item">
                  {/* FIXED: Added alt="" to match aria-hidden — decorative image */}
                  <img src={Ear_Money} alt="" aria-hidden="true" className="bussines_logos" />
                  <h3 className="item-title">Earn money through commission</h3>
                  <h4>Agents earn a percentage of the total price when they complete a sale.</h4>
                </li>
                <li className="Comission-item">
                  <img src={Bussines} alt="" aria-hidden="true" className="bussines_logos" />
                  <h3 className="item-title">Affiliate marketing</h3>
                  <h4>Earn commissions when you refer customers to your websites and those customers make purchases.</h4>
                </li>
              </ul>

              {/* FIXED: Replaced <a> with no href with a <p> tag — anchors require valid href */}
              <p className="card-title enterInfo">
                Enter your information to get more information
              </p>

              <form id="Travel_Form">
                <div>
                  {/* FIXED: for= changed to htmlFor= — JSX requires htmlFor */}
                  <label htmlFor="username">Username</label>
                  <input
                    className="input-field"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Input a Username"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    className="input-field"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Input an Email"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    className="input-field"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Input a valid Password"
                  />
                </div>
                <div>
                  <input className="btn-primary" type="submit" value="Register" />
                </div>
              </form>

              <div className="ErrorMs1" id="Error_Msg"></div>
            </div>
          </div>
        </section>

        <section id="reviews">
          <div className="container">
            <h2 className="h2 section-title">Reviews</h2>
            <p className="section-text">What people are saying about us</p>
            <ul className="about-list">

              <li>
                <div className="about-card about-card-1">
                  <figure className="card-banner">
                    <img className="user_pic" src={User1} alt="Reviewer 1" />
                  </figure>
                  <div className="card-content">
                    {/* FIXED: Replaced <a href="#"> with <h3> — review titles are not links */}
                    <h3 className="h3 card-title">Review 1</h3>
                    <p className="card-text">
                      Excellent experience, very well organized tour with
                      precise and on-time pick-up points. New coach well
                      maintained and drove excellently. He was an exceptional
                      guide, engaging, knowledgeable and very friendly!
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="about-card about-card-2">
                  <figure className="card-banner">
                    <img className="user_pic" src={User2} alt="Reviewer 2" />
                  </figure>
                  <div className="card-content">
                    <h3 className="h3 card-title">Review 2</h3>
                    {/* FIXED: Typo "thid" corrected to "this" */}
                    <p className="card-text">
                      The trip was fantastic! The guide was knowledgeable,
                      patient and friendly. He answered all questions about the
                      tour and was helpful with our requests. The kids learned
                      this for the first time and had so much fun that they did
                      the fly boarding twice!
                    </p>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </section>

      </article>
    </main>
  );
};

export default Home;