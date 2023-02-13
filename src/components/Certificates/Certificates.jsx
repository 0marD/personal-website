import React, { useState } from 'react';
import { StyledCertificates } from './StyledCertificates';
import html from '../../assets/images/html-certificate.jpeg';
import asyncJs from '../../assets/images/asynJs.jpeg';
import closures from '../../assets/images/closures-scope-js.jpeg';
import domCourse from '../../assets/images/domCourse.jpeg';
import frameworksJS from '../../assets/images/frameworksJS.jpeg';
import handleReactState from '../../assets/images/handle-state-react.jpeg';
import jsPractice from '../../assets/images/jsPractice.jpeg';
import npm from '../../assets/images/npm.jpeg';
import introToReact from '../../assets/images/reactIntro.jpeg';
import rendersReact from '../../assets/images/renders-composition-reactJs.jpeg';
import responsiveDesign from '../../assets/images/responsive-design-certificate.jpeg';
import { CardCertificates } from './CardCertificates';

const Certificates = () => {
  const [expand, setExpand] = useState(false);

  function handleExpand() {
    setExpand(!expand);
  }

  const dataCertificates = [
    {
      id: 1,
      courseName: 'Curso práctico de HTML y CSS',
      image: html,
    },
    {
      id: 2,
      courseName: 'Curso de asincronismo con Javascript',
      image: asyncJs,
    },
    {
      id: 3,
      courseName: 'Curso de closured y scope en Javascript',
      image: closures,
    },
    {
      id: 4,
      courseName: 'Curso de manipulacion del DOM',
      image: domCourse,
    },
    {
      id: 5,
      courseName: 'Curso de frameworks y librerías de Javascript',
      image: frameworksJS,
    },
    {
      id: 6,
      courseName: 'Curso de React.JS: manejo profesional del estado',
      image: handleReactState,
    },
    {
      id: 7,
      courseName: 'Curso práctico de Javascript',
      image: jsPractice,
    },
    {
      id: 8,
      courseName: 'Curso de Gestión de paquetes y dependencias en Javascript',
      image: npm,
    },
    {
      id: 9,
      courseName: 'Curso de introducción a React.js',
      image: introToReact,
    },
    {
      id: 10,
      courseName: 'Curso de patrones de render y composición en React.js',
      image: rendersReact,
    },
    {
      id: 11,
      courseName: 'Curso de Responsive design: Maquetación "mobile first"',
      image: responsiveDesign,
    },
  ];
  return (
    <>
      <hr id='certificates' />
      <StyledCertificates className={`${expand && 'expand'}`}>
        <h3>Certificaciones y diplomas</h3>
        <div className='certificates'>
          {dataCertificates.map((certificate) => (
            <CardCertificates certificate={certificate} key={certificate.id} />
          ))}
        </div>
        <div className='see__btn'>
          <span onClick={handleExpand}>{expand ? 'Ocultar' : 'Ver más'}</span>
        </div>
      </StyledCertificates>
    </>
  );
};

export { Certificates };
