import { StyledProjectModal } from "./StyledProjectModal";
import { HiXCircle } from "react-icons/hi2";
import { CTAAnchor } from "../CTAAnchor/CTAAnchor";
import { useProjectModal } from "./useProjectModal";

const ProjectModal = (): JSX.Element => {
    const {
        isProjectModalOpen,
        handleClick,
        projectToRenderModal
    } = useProjectModal();

    return (
        <StyledProjectModal
            className={`project-modal ${isProjectModalOpen && "active"}`}
        >
         <div className="project-modal__container">
         <img
                className="project-modal__image"
                src={projectToRenderModal?.src}
                alt={`${projectToRenderModal?.name} cover`}
            />
            <div className="project-modal__content">
                <HiXCircle
                    className="project-modal__close"
                    onClick={handleClick}
                />
                <h1 className="project-modal__title">
                    {projectToRenderModal?.name}
                </h1>
                <p className="project-modal__description">
                    {projectToRenderModal?.description}
                </p>
                <CTAAnchor href={projectToRenderModal?.url} text="Visitar proyecto" />
            </div>
         </div>
        </StyledProjectModal>
    );
};

export { ProjectModal };
