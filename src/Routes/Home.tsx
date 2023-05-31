import { Cover } from "../components/Cover";
import { ProjectsPreview } from "../components/ProjectsPreview";
import { StackPrewiev } from "../components/StackPreview";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";

const Home = (): JSX.Element => {
  return (
    <main className="home route">
      <Cover />
      <StackPrewiev />
      <ProjectsPreview slice={1} />
      <div className="home-contact section--light">
        <Link to={"/contact"} className="home-contact__btn">
          <FiMail className="home-contact__btn-icon"/>
          <span className="home-contact__btn-text">¡Vamos, escribeme!</span>
        </Link>
      </div>
    </main>
  );
};

export { Home };
