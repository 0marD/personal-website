import React from 'react'
import gitLogo from '../assets/icons/github-svgrepo-com.svg'
import linkedinLogo from '../assets/icons/linkedin-svgrepo-com.svg'

function Footer() {
  return (
    <footer className="footer ">
      <span className="footer__legend">Visita mis cuentas de LinkedIn y GitHub</span>
      <figure className="footer__social">
        <a title='Go to my GitHub profile' href="https://github.com/0marD" target='_blank'><img src={gitLogo} alt="GitHub logo" className="footer__social__icon" /></a>
        <a title='Go to my LinkedIn profile' href="https://www.linkedin.com/in/omar-dhz/" target='_blank'><img src={linkedinLogo} alt="LinkedIn logo" className="footer__social__icon" /></a>
      </figure>
    </footer>
  )
}

export { Footer }