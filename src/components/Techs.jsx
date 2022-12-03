import React from 'react'
import jsIcon from '../assets/icons/js.svg'
import cssIcon from '../assets/icons/css.svg'
import reactIcon from '../assets/icons/react-logo.png'
import sassIcon from '../assets/icons/sass-1.svg'
import htmlIcon from '../assets/icons/html.svg'
import responsiveDesignIcon from '../assets/icons/responsive-svgrepo-com.svg'
import apiIcon from '../assets/icons/api-svgrepo-com.svg'
import gitIcon from '../assets/icons/git-svgrepo-com.svg'
import gitHubIcon from '../assets/icons/github.svg'

function Techs() {
  return (
    <>
      <hr id="technologies" />
      <section className="technologies showcase">
        <h3 className="technologies__heading">Tecnologías y conceptos con los que sé trabajar</h3>
        <div className="techs">
          <div className="techs__tech">
            <span>JavaScript</span><img src={jsIcon} alt="JavaScript icon" />
          </div>
          <div className="techs__tech">
            <span>CSS</span><img src={cssIcon} alt="CSS icon" />
          </div>
          <div className="techs__tech">
            <span>React</span><img src={reactIcon} alt="React icon" />
          </div>
          <div className="techs__tech">
            <span>Sass</span><img src={sassIcon} alt="SASS icon" />
          </div>
          <div className="techs__tech">
            <span>HTML</span><img src={htmlIcon} alt="HTML icon" />
          </div>
          <div className="techs__tech">
            <span>Responsive design</span><img className="imgLg" src={responsiveDesignIcon} alt="Multiple devices icon" />
          </div>
          <div className="techs__tech">
            <span>Uso de APIs</span><img className="imgLg" src={apiIcon} alt="Api icon" />
          </div>
          <div className="techs__tech">
            <span>Git</span><img className="imgLg" src={gitIcon} alt="Git icon" />
          </div>
          <div className="techs__tech">
            <span>GitHub</span><img className="imgLg" src={gitHubIcon} alt="GitHub icon" />
          </div>
        </div>
      </section>
    </>
  )
}

export { Techs }