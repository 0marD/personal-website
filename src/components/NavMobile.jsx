import React from 'react'

function NavMobile(props) {
  return (
    <div className={props.className}>
      <nav className={props.classNameNav}>
        <div className="navMobile-Items">
          <a href="#home" className="navMobile-Items__link" onClick={props.navItemClick}>Home</a>
          <a href="#technologies" className="navMobile-Items__link" onClick={props.navItemClick}>Tecnologías</a>
          <a href="#projects" className="navMobile-Items__link" onClick={props.navItemClick}>Projectos</a>
          <a href="#certificates" className="navMobile-Items__link" onClick={props.navItemClick}>Certificaciones</a>
          <a href="#form" className="navMobile-Items__link navMobile-Items__link--contact" onClick={props.navItemClick}>Contacto</a>
        </div>
      </nav>
    </div>
  )
}

export { NavMobile }