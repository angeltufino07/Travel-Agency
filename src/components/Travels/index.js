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
        <body className="container_travel">           
        <div class="img-container">
            <img class="img-container-file" src={LosCabos_Promocional}  alt=" los cabos"/>                           
        </div>
        <div class="welcome-container">
                <div class="welcome-content">
                    <div class="slide">
                        <img src={Pez_gato} class="img" alt=" pez gato"/>
                        <h1 lang="es">Snorkel Pez Gato</h1>
                        <h2>Iconic landmarks of Cabo San Lucas</h2>
                        
                        <p> Swim in the colorful azure waters with our tropical sea life or if you prefer, lounge on the deck basking in the warmth of Los Cabos´s sunshine</p>
                    </div>
                    <div class="slide">
                        <img src={Extreme_Canopy} class="img" alt="Extreme Canopy"/>
                        <h1>Extreme Canopy</h1>
                        <h2>Over 1.8 miles of different zip lines for your enjoyment</h2>
                       
                        <p>Fly across Costa Azul Canyon with over three miles of different zip lines. You will take part in an exciting cable ride adventure high above the canyon river</p>
                    </div>
                    <div class="slide">
                        <img src={Cabo_High} class="img" alt=" cabo highlights"/>
                        <h1 lang="es">Cabo Highlights</h1>
                        <h2 >Witness the iconic landmarks of Cabo San Lucas</h2>
                        
                        <p>Visit the amazing Glass Factory, enjoy Tequila sampling and some free time for the best shopping in Cabo.</p>
                    </div>
                    
                  
                  
                </div>
        </div>


    
        </body>

       
        <Weather/>

</>
    )

}

export default Travel