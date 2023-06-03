import  { useState } from "react";
import { Link } from "react-router-dom";

const NavDesk = (): JSX.Element => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="nav-desk">
      <Link
        to={"/"}
        className={`nav-desk__link ${activeLink === "/" ? "active" : ""}`}
        onClick={() => handleLinkClick("/")}
      >
        Inicio
      </Link>
      <Link
        to={"/resume"}
        className={`nav-desk__link ${activeLink === "/resume" ? "active" : ""}`}
        onClick={() => handleLinkClick("/resume")}
      >
        Resumen
      </Link>
      <Link
        to={"/stack"}
        className={`nav-desk__link ${activeLink === "/stack" ? "active" : ""}`}
        onClick={() => handleLinkClick("/stack")}
      >
        Stack
      </Link>
      <Link
        to={"/projects"}
        className={`nav-desk__link ${activeLink === "/projects" ? "active" : ""}`}
        onClick={() => handleLinkClick("/projects")}
      >
        Proyectos
      </Link>
      <Link
        to={"/contact"}
        className={`nav-desk__link ${activeLink === "/contact" ? "active" : ""}`}
        onClick={() => handleLinkClick("/contact")}
      >
        Escríbeme
      </Link>
    </nav>
  );
};

export { NavDesk };
