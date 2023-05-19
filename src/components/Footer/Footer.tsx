import { StyledFooter } from "./StyledFooter";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = (): JSX.Element => {
  return (
    <StyledFooter className="footer">
      <p className="footer__text">Sígueme en mis redes sociales</p>
      <div>
        <a href="https://www.linkedin.com/in/omar-diaz-hdz/" target="_blank" rel="noopener noreferrer" className="footer__link">
          <BsLinkedin className="footer__icon" title="Ir a LinkedIn" />
        </a>
        <a href="https://github.com/0marD" target="_blank" rel="noopener noreferrer" className="footer__link">
          <BsGithub className="footer__icon" title="Ir a GitHub" />
        </a>
      </div>
    </StyledFooter >
  );
};

export { Footer };