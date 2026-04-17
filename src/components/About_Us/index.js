import React from "react";
// FIXED: Removed NavLink — was imported but never used
// FIXED: Removed team_1 and team_2 — were imported but never used
import Office_Entrance from "../../assets/Office_Entrance.jpg";
import Mision from "../../assets/Office_mision.jpg";
import Vision from "../../assets/Office_vision.png";
import Video_Promo from "../../assets/Video_Promocional.mp4";
import "./styles.css";

const About = () => {
  return (
    // FIXED: Removed <body> tag — invalid inside a React component.
    // <body> belongs only in public/index.html, never in JSX.
    // FIXED: Replaced <body> wrapper with a semantic <main> element
    <main>

      {/* FIXED: Changed all class= to className= — JSX requires className */}
      <section className="gridSection">
        <div className="sectionDesc aboutusDesc">
          <h1 className="headline">The Company History</h1>
        </div>

        <div className="statusContainer">
          <div className="status">
            <h1><b>1.5M.</b> Clients</h1>
            <p>Satisfied to travel with us and exploring new worlds</p>
          </div>
          <div className="status">
            <h1><b>150+</b> Special Trips</h1>
            {/* FIXED: Typo "especifically" corrected to "specifically" */}
            <p>We have around 150 trips designed specifically for you</p>
          </div>
          <div className="status">
            <h1><b>20+</b> Countries</h1>
            <p>It is the perfect spot to get started with your company.</p>
          </div>
        </div>

        <div className="sectionPic bouncepic" id="sectionPic">
          {/* FIXED: Removed leading space from alt text */}
          <img src={Office_Entrance} alt="Office entrance" />
        </div>

        <div className="sectionDesc aboutusDesc">
          {/* FIXED: Typo "emtire" corrected to "entire" */}
          <p className="sub-headline">
            "Travel" has grown from humble beginnings in 2010, located in CDMX,
            selling tours to people who seek unique experiences, generating
            revenues in excess of $750,000 per annum, by offering mid-range,
            semi-private and private tours for travelers seeking quality service
            at an affordable price.
          </p>
        </div>
      </section>

      <div className="services">
        <div className="aboutusimgContainer">
          <img src={Mision} alt="Our mission" />
          <img src={Vision} alt="Our vision" />
        </div>
        <div className="organizational">
          <div className="organizational-mision">
            <div className="organizational-description">
              <h1>Mission</h1>
              <p>
                We are serving our customers, searching for their entire
                satisfaction, providing quality touristic services, and
                committing to our country's social, cultural, and environmental
                quality.
              </p>
            </div>
          </div>
          <div className="organizational-vision">
            <div className="organizational-description">
              <h1>Vision</h1>
              <p>
                By next year, we will be among the very top businesses in
                Mexico's tourist industry, widely lauded for the excellence of
                our offerings and the positive impact we have on the nation's
                progress.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="video">
        <h1 className="video-header">Meet Us</h1>
        <div className="video-grid" aria-label="Promotional video">
          {/* FIXED: Removed alt= from <source> — <source> does not support alt attribute */}
          {/* Added aria-label on wrapper div to maintain accessibility */}
          <video controls>
            <source src={Video_Promo} type="video/mp4" />
          </video>
        </div>
      </section>

    </main>
  );
};

export default About;