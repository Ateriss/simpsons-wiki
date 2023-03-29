import React from "react";
import "./personajes.css";
import maletin from '../assets/icons/maletin-en-blanco.png';
import corazon from '../assets/icons/me-gusta.png';
import user from '../assets/icons/usuario.png';

function Personajes({ personajes = [] }) {
  return (
    <div className="box">
      {personajes.map((item, index) => (
        <div key={index} className="card">
          
          <div className="card__front">
            <img src={item.Imagen} className="card__personaje" />
            <div className="card__front--descripcion">
              <div className="card__front--nombre">
                <h2>{item.Nombre}</h2>
              </div>
              <div className="card__front--txt">
                <div className="ocupacion">
                  <img src={maletin} className="ocupacion__img" />
                  <p>{item.Ocupacion}</p>
                </div>
                <div className="ocupacion">
                  <img src={corazon} className="ocupacion__img"/>
                  <p>{item.Estado}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card__back">
            <div className="card__back--box">
            
            <div className="card__back--descripcion">
            <img src={item.Imagen} className='card__back--img'/>
              <h2 id="card__back--nombre" >{item.Nombre}</h2>
              <div className="card__back--txt">
              <div className="ocupacion">
                  <img src={maletin} className="ocupacion__img" />
                  <p>{item.Ocupacion}</p>
                </div>
                <div className="estado">
                <div className="ocupacion">
                  <img src={corazon} className="ocupacion__img"/>
                  <p>{item.Estado}</p>
                </div>
                <div className="ocupacion">
                  <img src={user} className="ocupacion__img"/>
                  <p>{item.Genero}</p>
                </div>
                </div>
                <div className="ocupacion historia">
                  <p>{item.Historia}</p>
                </div>
                </div>
                </div>
            </div>
          </div>
          </div>
        
      ))}
    </div>
  );
}

export { Personajes };
