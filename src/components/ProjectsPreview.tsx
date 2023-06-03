import { Link } from "react-router-dom";

interface Props {
    children?: React.ReactNode;
}

const ProjectsPreview = ({ children }: Props): JSX.Element => {

    return (
        <section className="projects-preview">
            <h2 className="projects-preview__title">Proyectos</h2>
            <div className="projects-preview__cards">
                {children}
            </div>
            <Link to={"/projects"} className="projects-preview__button">Ver más</Link>
        </section>
    );
};

export { ProjectsPreview };
