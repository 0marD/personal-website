import React, { useState } from 'react'
// import arrow from '../assets/icons/arrow-left-svgrepo-com.svg'
import project1 from '../assets/images/intro-section-with-dropdown-navigation.png'
import project2 from '../assets/images/calculator-app.png'
import project3 from '../assets/images/e-commerce-product-page.png'
import project4 from '../assets/images/shortly-url-shortening-api.png'
import project5 from '../assets/images/advice-generator-app.png'
import project6 from '../assets/images/coding-bootcamp-testimonials-slider.png'
import { ProjectCard } from './ProjectCard'


function Projects(props) {

  // const project = [project1, project2, project3]
  // const [imageIndex, setImageIndex] = useState(0);

  // function nextImg() {
  //   imageIndex >= 2 ? setImageIndex(0) : setImageIndex(imageIndex + 1);
  //   // console.log(e)
  // }

  // function prevImg() {
  //   imageIndex <= 0 ? setImageIndex(2) : setImageIndex(imageIndex - 1);
  //   // console.log(imageIndex)
  // }


  return (
    <>
      <hr id="projects" />
      <section className="projects showcase">
        <h3 className="projects__heading">Proyectos</h3>
        <ProjectCard
          projectImage={project1}
          heading="Intro section with dropdown navigation"
          link="https://0mard.github.io/intro-section-with-dropdown-navigation/"
          paragraph="Este proyecto consiste en un website la cual contiene una barra de menú con secciones desplegables"
        />
        <ProjectCard
          projectImage={project2}
          heading="Calculator app"
          link="https://calculator-app-omar-diaz.netlify.app"
          paragraph="Este proyecto consiste en una calculadora funcional a la cual el usuario le puede cambiar el esquema de colores"
        />
        <ProjectCard
          projectImage={project3}
          heading="Página de productos de comercio electrónico"
          link="https://e-commerce-page-omar-diaz-h.netlify.app"
          paragraph="Este proyecto consiste en una página de e-commerce con carrito y galería funcionales"
        />
        <ProjectCard
          projectImage={project4}
          heading="Acortador de URL"
          link="https://url-shortening-page-with-api-omardiaz.netlify.app"
          paragraph="Este proyecto consiste en una página en la cual se pueden acortar URLs empleando una API"
        />
        <ProjectCard
          projectImage={project5}
          heading="Aplicación generadora de consejos"
          link="https://adivices-generator-app-omardiaz.netlify.app"
          paragraph="Este proyecto consiste en una página la cual se genera consejos aleatoriamente al presionar un botón empleando una API"
        />
        <ProjectCard
          projectImage={project6}
          heading="Slider de testimonios"
          link="https://testimonials-slider-omar-diaz.netlify.app"
          paragraph="Este proyecto consiste en un slider de testimonios, en la cual cambia tanto el testimonio como la foto al hacer clic en los botones."
        />
      </section>
    </>
  )
}

export { Projects }