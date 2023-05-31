import { VscSmiley } from 'react-icons/vsc';
import photo from '../assets/images/pictureMy.png';
import { Link } from 'react-router-dom';

const Cover = (): JSX.Element => {
  return (
    <div className="cover section">
      <div className="cover__content">
        <h1 className="cover__title heading">
          <span className="cover__title-top">Hola, soy</span>
          <span className="cover__title-meddle ">Omar Díaz</span>
          <span className="cover__title-bottom">Soy un desarrollador frontend</span>
        </h1>
        <figure className="cover__image">
          <img src={photo} alt="Omar Díaz's photo" />
        </figure>
      </div>
      <div className="cover__content cover__content--bottom">
        <span className="cover__subtitle">Hola de nuevo</span>
        <p className="cover__description">
          <span className="cover__description-part">Me llamo Omar Díaz Hernández y soy un apasionado desarrollador web que se está introduciendo en el mundo de la tecnología.</span>
          <span className="cover__description-part">Este sitio es un recopilatorio de algunos de mis proyectos de práctica que he realizado para demostrar mis habilidades y conocimientos en el desarrollo web.</span>
          <span className="cover__description-part">Si está buscando un desarrollador, estaré encantado de hablar con usted</span>
        </p>
        <div className="cover__buttons">
        <a href="/src/assets/CV/cv-omar-diaz-frontend-developer.pdf" download className="cover__button btn-style-v1">Descargar CV  <VscSmiley/></a>
        <Link to={"/resume"} className='cover__button button'>Ver CV online</Link>
        </div>
      </div>
    </div>
  );
};

export { Cover };
