import React, { useState } from 'react'

function NavDesk() {

  const [item, setItem] = useState(false)

  function itemActive() {
    setItem(item) ? setItem(!item) : ""
  }

  return (
    <nav className="navDesk">

      <a href="#home" className={`navDesk-Items ${item ? 'navDesk-Items--active' : ''}`} onClick={itemActive}>Home</a>
      <a href="#technologies" className={`navDesk-Items ${item ? 'navDesk-Items--active' : ''}`}>Tecnologías</a>
      <a href="#projects" className={`navDesk-Items ${item ? 'navDesk-Items--active' : ''}`}>Projectos</a>
      <a href="#certificates" className={`navDesk-Items ${item ? 'navDesk-Items--active' : ''}`}>Certificaciones</a>
      <a href="#form" className="navDesk--contact">Escríbeme</a>

    </nav>
  )
}

export { NavDesk }