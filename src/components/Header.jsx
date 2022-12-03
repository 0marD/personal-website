import React, { useState } from 'react'
import { Logo } from './Logo'
import { MenuHam } from './MenuHam'
import { NavDesk } from './NavDesk'
import { NavMobile } from './NavMobile'


function Header() {
  const [activeMenu, setActiveMenu] = useState(false)

  function activeIcon() {
    setActiveMenu(!activeMenu)
  }
  return (
    <>
      <header className="header">
        <Logo />
        <MenuHam className={`menu  ${activeMenu ? "opened" : ""}`} onClick={activeIcon} />
        <NavDesk />
      </header>
      <NavMobile className={`navMobile-bg ${activeMenu ? "navMobile-bg--show" : ""}`} classNameNav={`navMobile ${activeMenu ? "navMobile--show" : ""}`} navItemClick={activeIcon} />
    </>
  )
}

export { Header }