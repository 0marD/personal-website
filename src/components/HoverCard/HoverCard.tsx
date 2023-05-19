
// archivo HoverCard.tsx
import { StyledHoverCard } from "./StyledHoverCard";
import { projectsData, Project } from "../../data/projectsData";

interface Props {
    slice?: number;
    className?: string
}

const HoverCard = ({ slice, className }: Props): JSX.Element => {

    const projectsToRender = projectsData.slice(0, slice);

    return (
        <StyledHoverCard className={className}>
            {projectsToRender.map((project: Project) => (
                <div className="card" key={project.name}>
                    <div className="card__content card__content--top">
                        <h3 className="card__title">{project.name}</h3>
                        <p className="card__description">{project.description}</p>
                    </div>
                    <img className="card__image" src={project.src} alt={`${project.name} image`} />
                    <div className="card__content card__content--bottom">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="card__cta" >Visitar web</a>
                    </div>
                </div>
            ))}
        </StyledHoverCard>
    );

};

export { HoverCard };
