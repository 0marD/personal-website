import { useSelector } from "react-redux";
import { projectsData } from "../data/projectsData";
import { RootState } from "../redux/store";
import { HiXCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const ProjectDetail = (): JSX.Element => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const projectSelected = useSelector(
    (state: RootState) => state.projectSelected.value
  );

  const projectToRender = projectsData.find(
    (project) => project.direction === projectSelected
  );

  return (
    <main className="project-detail">
      <figure className="project-detail__image-wrapper">
        <img src={projectToRender?.src} alt={`${projectToRender?.name}'s image`} className="project-detail__image" />
      </figure>
      <div className="project-detail__bottom">
       <div className="project-detail__content">
       <button onClick={goBack} className="project-detail__button">
          <HiXCircle className="project-detail__icon" />
        </button>
        <h2 className="project-detail__heading">{projectToRender?.name}</h2>
        <p className="project-detail__description">{projectToRender?.description}</p>
        {/* <ul className="project-detail__stack">
          {
            projectToRender?.stack?.map((stack: Stack, index: number) => (
              <li className={`stack ${stack.code}`} key={index}>{stack.stack}</li>
            ))
          }
        </ul> */}
        <div className="project-detail__links">
          <a target="_blank" rel="noopener noreferrer" href={projectToRender?.url} className="project-detail__link" >Visitar sitio</a>
          <a target="_blank" rel="noopener noreferrer" href={projectToRender?.github} className="project-detail__link">Visitar repositorio</a>
        </div>
       </div>
      </div>
         </main>
  );
};

export { ProjectDetail };
