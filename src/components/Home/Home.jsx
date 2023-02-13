import React from 'react';
import { StyledHome } from './StyledHome';
import homeImg from '../../images/heroLight.svg';

const Home = () => {
  return (
    <>
      <hr id='home' />
      <StyledHome>
        <div className='left'>
          <img src={homeImg} alt='Home image' />
        </div>
        <div className='right'>
          <h2>Hola, soy Omar</h2>
          <h3>Desarrollador frontend novato</h3>
          <p className='body'>
            Bienvenido a mi portafolio web, soy Omar Díaz Hernández, alguien
            apasionado desarrollador web que está comenzando en el mundo de la
            tecnología.
            <br />
            Este sitio es un recopilatorio de algunos de mis proyectos de
            práctica que he realizado para demostrar mis habilidades y
            conocimientos en el desarrollo web.
            <br />
            Espero que lo disfrutes y si tienes alguna pregunta o necesitas un
            desarrollador, no dude en ponerse en contacto conmigo.
          </p>
        </div>
      </StyledHome>
    </>
  );
};

export { Home };
