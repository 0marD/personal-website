import { StyledMappedProjects } from "./StyledMappedProjects";
import { useDispatch } from "react-redux";
import { projectSelected } from "../../slices/ProjectSelected";
import { toggleProjectModal } from "../../slices/toggleProjectModal";
import { projectsData } from "../../data/projectsData";


interface Project {
    name: string;
    src: string;
    description: string;
    url: string;
}

interface Props {
    slice?: number;
}

const MappedProjects = ({ slice }: Props): JSX.Element => {
    const dispatch = useDispatch();

    const handleClick = (name: string) => {
        dispatch(projectSelected(name));
        dispatch(toggleProjectModal());
    };

    const projectsToRender = projectsData.slice(0, slice);

    return (
        <StyledMappedProjects>
            {projectsToRender.map((project: Project) => (
                <div className="project" key={project.name}>
                    <div className="project__image-wrapper">
                        <img
                            className="project__image"
                            src={project.src}
                            alt={`${project.name} cover`}
                        />
                    </div>
                    <p className="project__name">{project.name}</p>
                    <a
                        className="project__link"
                        onClick={() => handleClick(project.name)}
                    >
                        Detalles
                    </a>
                    <p className="project__description">{project.description}</p>
                </div>
            ))}
        </StyledMappedProjects>
    );
};

export { MappedProjects };
