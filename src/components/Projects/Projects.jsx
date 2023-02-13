import React from 'react';
import { StyledProjects } from './StyledProjects';
import calculator from '../../assets/images/calculator-app.png';
import adviceGenerator from '../../assets/images/advice-generator-app.png';
import introSection from '../../assets/images/intro-section-with-dropdown-navigation.png';
import ecommerce from '../../assets/images/e-commerce-product-page.png';
import urlShorter from '../../assets/images/shortly-url-shortening-api.png';
import sliderTestimonials from '../../assets/images/coding-bootcamp-testimonials-slider.png';
import { useState } from 'react';
import { ProjectsCard } from './ProjectsCard';

const Projects = () => {
  const [content, setContent] = useState(false);

  function handleContent() {
    setContent(!content);
  }

  const dataCard = [
    {
      id: 1,
      head: 'Intro section with dropdown navigation',
      link: 'https://0mard.github.io/intro-section-with-dropdown-navigation/',
      body: 'Este proyecto consiste en un website la cual contiene una barra de menú con secciones desplegables',
      techs: 'Este fue creado con Javascripit, HTML y CSS vanilla',
      image: introSection,
      alt: 'Project image',
    },
    {
      id: 2,
      head: 'Calculator app',
      link: 'https://calculator-app-omar-diaz.netlify.app',
      body: 'Este proyecto consiste en una calculadora funcional a la cual el usuario le puede cambiar el esquema de colores',
      techs: 'Este fue creado con Javascripit, HTML y CSS vanilla',
      image: calculator,
      alt: 'Project image',
    },
    {
      id: 3,
      head: 'Página de productos de comercio electrónico',
      link: 'https://e-commerce-page-omar-diaz-h.netlify.app',
      body: 'Este proyecto consiste en una página de e-commerce con carrito y galería funcionales',
      image: ecommerce,
      techs: 'Este fue creado con Javascripit, HTML y CSS vanilla',
      alt: 'Project image',
    },
    {
      id: 4,
      head: 'Acortador de URL',
      link: 'https://url-shortening-page-with-api-omardiaz.netlify.app',
      body: 'Este proyecto consiste en una página en la cual se pueden acortar URLs empleando una API',
      image: urlShorter,
      techs: 'Este fue creado con Javascripit, HTML y CSS vanilla',
      alt: 'Project image',
    },
    {
      id: 5,
      head: 'Aplicación generadora de consejos',
      link: 'https://adivices-generator-app-omardiaz.netlify.app',
      body: 'Este proyecto consiste en una página la cual se genera consejos aleatoriamente al presionar un botón empleando una API',
      image: adviceGenerator,
      techs: 'Este fue creado con Javascripit, HTML y CSS vanilla',
      alt: 'Project image',
    },
    {
      id: 6,
      image: sliderTestimonials,
      head: 'Slider de testimonios',
      link: 'https://testimonials-slider-omar-diaz.netlify.app',
      body: 'Este proyecto consiste en un slider de testimonios, en la cual cambia tanto el testimonio como la foto al hacer clic en los botones.',
      techs: 'Este fue creado con Javascripit, HTML y CSS vanilla',
      alt: 'Project image',
    },
  ];
  return (
    <>
      <hr id='projects' />
      <StyledProjects>
        <h3>Proyectos</h3>
        <div className='projects'>
          {dataCard.map((project) => (
            <ProjectsCard project={project} key={project.id} />
          ))}
        </div>
      </StyledProjects>
    </>
  );
};

export { Projects };
