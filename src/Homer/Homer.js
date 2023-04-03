import React from "react";
import "./Homer.css"
import HomerHead from "../assets/homer-head.png"
import HomerHands from "../assets/homer-hands.png"
import { GitHub } from 'react-feather';
import { Linkedin } from 'react-feather';
import Ateris from "../assets/caramia__o.png"
import Dona from "../assets/dona.png"


function Homer (){
    return(
        <div className="homer">
            <div className="bubble">
                <div className="bubble__txt">
                <p>
                    Sigue a Alexandra en: 
                </p>
                <div className="homer__rrss">
                    <a href="https://github.com/Ateriss"  target="_blank">  <GitHub color="#424F46" size={32} /> </a>
                    <a href="https://www.linkedin.com/in/alexandra-linares-vi%C3%B1a-67b027125/" target="_blank" >  <Linkedin color="#424F46" size={32} /> </a>
                </div>
                <div className="links">
                    <a className="link" target="_blank"  href="https://ateriss.github.io/Portafolio-Personal/" ><img src={Ateris} className="ateris" /> <p>Haz click aquí para ver su portafolio</p><img src={Ateris} className="ateris" /> </a>
                    <a className="link" target="_blank"  href="https://simpsonsapi.000webhostapp.com/" ><img src={Dona} className="dona" /><p>Haz click aquí para ver la documentación de la API</p><img src={Dona} className="dona" /></a>
                </div>
                </div>
            </div>
            <div className="homer__box">
                <img src={HomerHead} alt=""  id="homer__head"/>
                <img src={HomerHands} alt=""  id="homer__hands" />
            </div>
        </div>
    )
};

export { Homer }