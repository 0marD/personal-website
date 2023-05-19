// archivo projectModalFunctions.ts
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleProjectModal } from '../../slices/toggleProjectModal';
import { projectsData } from "../../data/projectsData";

export const useProjectModal = () => {
    const isProjectModalOpen = useSelector(
        (state: RootState) => state.toggleProjectModal.value
    );
    const projectSelected = useSelector((state: RootState) => state.projectSelected.value);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleProjectModal());
    };

    const projectToRenderModal = projectsData.find(
        (project) => project.name === projectSelected
    );

    return {
        isProjectModalOpen,
        projectSelected,
        handleClick,
        projectToRenderModal
    };
};
