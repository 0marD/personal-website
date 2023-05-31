import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";

const Projects = (): JSX.Element => {
  return (
    <main className="projects route">
      <h1 className="projects__heading heading">Proyectos</h1>
      <div className="projects__container">
        <ProjectCard />
      </div>
      <Link to={"/"} className="projects__button button">
        Ir a inicio
      </Link>
    </main>
  );
};

export { Projects };
