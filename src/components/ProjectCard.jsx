import React, { useState } from 'react'


function ProjectCard(props) {

  const [details, setDetails] = useState(false)

  function showDetails() {
    setDetails(!details)

  }

  return (
    <div className="projectsCard">
      <figure className="projectsCard__image">
        <img src={props.projectImage} alt="Project image" className="projectsCard__image-img" />
      </figure>
      <p className="projectsCard__legend" onClick={showDetails} title="Show details"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>Ver detalles</p>
      <div className={`${details ? "projectDetails projectDetails--show" : "projectDetails"}`}>
        <svg onClick={showDetails} className='projectsCard__closeIcon' width="48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title>Close</title><path d="M41,43a2,2,0,0,1-1.41-.59L5.62,8.44A2,2,0,0,1,8.44,5.62L42.38,39.56A2,2,0,0,1,41,43Z" fill="#ea802a" /><path d="M7,43a2,2,0,0,1-1.41-3.41L39.56,5.62a2,2,0,0,1,2.83,2.83L8.44,42.38A2,2,0,0,1,7,43Z" fill="#ea802a" /></svg>
        <h4 className="projectDetails__heading">{props.heading}</h4>
        <p className="projectDetails__paragraph">{props.paragraph}</p>
        <a href={`${props.link}`} target="_blank" className="projectDetails__link" >Visitar este web</a>
      </div>
    </div >
  )
}

export { ProjectCard }