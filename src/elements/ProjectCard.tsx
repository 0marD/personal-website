import { Link } from "react-router-dom";
import { projectsData, Project } from "../data/projectsData";
import { useDispatch } from "react-redux";
import { projectSelected } from "../redux/slices/projectSelectedSlice";

interface Props {
    slice?: number;
}

const ProjectCard = ({ slice }: Props): JSX.Element => {
    const toRender = projectsData.slice(0, slice);

    const dispatch = useDispatch();
    const detailsOnclick = (name: string) => {
        dispatch(projectSelected(name));
    }

    
    return (
        <>
            {toRender.map((project: Project) => (
                <div className="project-card" key={project.name}>
                    <div className="project-card__image-wrapper">
                        <img
                            className="project-card__image"
                            src={project.src}
                            alt={`${project.name} cover`}
                        />
                    </div>
                    <Link className="project-card__link" to={`/project/${project.direction}`} title="Ver detalles" onClick={() => detailsOnclick(project.direction)}>
                        Detalles
                    </Link>
                </div>
            ))}
        </>
    );
};

export { ProjectCard };
