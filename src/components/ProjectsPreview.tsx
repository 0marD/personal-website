import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";

interface Props {
  slice?: number;
}

const ProjectsPreview = ({ slice }: Props): JSX.Element => {

  return (
    <div className="projects-preview section">
    <h2 className="projects-preview__title heading">Proyectos</h2>
    <div className="projects-preview__cards">
      <ProjectCard slice={slice} />
    </div>
    <Link to={"/projects"} className="btn-style-v1 projects-preview__btn">Ver más</Link>
  </div>
  );
};

export { ProjectsPreview };
