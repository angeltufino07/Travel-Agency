import React from "react";
import Weather from "../Weather/weather";
import LosCabos_Promocional from "../../assets/Los cabos promotional.png";
import Pez_gato from "../../assets/pez gato.jpg";
import Extreme_Canopy from "../../assets/Extreme Canopy.jpg";
import Cabo_High from "../../assets/Cabo Highlights.jpg";
import "./styles.css";

const Travel = () => {
    return (
<>
<div className="container_travel">           
        <div className="img-container">
            <img className="img-container-file" src={LosCabos_Promocional}  alt="los cabos"/>                           
        </div>
        <div className="welcome-container">
                <div className="welcome-content">
                    <div className="slide">
                        <img src={Pez_gato} className="img" alt="pez gato"/>
                        <h1>Snorkel Pez Gato</h1>
                        <h2>Iconic landmarks of Cabo San Lucas</h2>
                        
                        <p> Swim in the colorful azure waters with our tropical sea life or if you prefer, lounge on the deck basking in the warmth of Los Cabos´s sunshine</p>
                    </div>
                    <div className="slide">
                        <img src={Extreme_Canopy} className="img" alt="Extreme Canopy"/>
                        <h1>Extreme Canopy</h1>
                        <h2>Over 1.8 miles of different zip lines for your enjoyment</h2>
                       
                        <p>Fly across Costa Azul Canyon with over three miles of different zip lines. You will take part in an exciting cable ride adventure high above the canyon river</p>
                    </div>
                    <div className="slide">
                        <img src={Cabo_High} className="img" alt="cabo highlights"/>
                        <h1>Cabo Highlights</h1>
                        <h2 >Witness the iconic landmarks of Cabo San Lucas</h2>
                        
                        <p>Visit the amazing Glass Factory, enjoy Tequila sampling and some free time for the best shopping in Cabo.</p>
                    </div>
                      
                </div>
        </div>
</div>
<Weather/>
</>
    )
}
export default Travel