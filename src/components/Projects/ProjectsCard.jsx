import React from 'react';
import { useState } from 'react';

const ProjectsCard = ({
  project: { head, link, body, techs, image, alt, id },
}) => {
  const [content, setContent] = useState(false);

  function handleContent() {
    setContent(!content);
  }
  return (
    <div className='card' key={id}>
      <figure className='imageContainer'>
        <img src={image} alt={alt} className='imageContainer__image' />
      </figure>
      <span className='seeBtn' onClick={handleContent}>
        {!content ? 'Ver más' : 'Ocultar'}
      </span>
      <div className={`content ${content && 'content--active'}`}>
        <h4 className='content__head'>{head}</h4>
        <p className='content__body'>{body}</p>
        <p className='content__techs'>{techs}</p>
        <a href={link} target='_blank' className='content__link'>
          Visitar el sitio
        </a>
      </div>
    </div>
  );
};

export { ProjectsCard };
