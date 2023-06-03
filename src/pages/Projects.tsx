import { Link } from "react-router-dom";
import { ProjectCard } from "../elements/ProjectCard";

const Projects = (): JSX.Element => {
  return (
    <main className="projects route">
      <h1 className="projects__heading">Proyectos</h1>
      <div className="projects__container">
        <ProjectCard />
      </div>
      <Link to={"/"} className="projects__button">
        Ir a inicio
      </Link>
    </main>
  );
};

export { Projects };
