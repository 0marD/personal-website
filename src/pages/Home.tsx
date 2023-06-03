import { ContactPreview } from "../components/ContactPreview";
import { Cover } from "../components/Cover";
import { ProjectsPreview } from "../components/ProjectsPreview";
import { StackPreview } from "../components/StackPreview";
import { ProjectCard } from "../elements/ProjectCard";
import { StackCard } from "../elements/StackCard";
import { useProjectPreview, useStackPreview } from "../hooks/usePreview";

const Home = (): JSX.Element => {

  const { projectSlice } = useProjectPreview();
  const { stackSlice } = useStackPreview()

  return (
    <main className="home">
      <Cover />
      <StackPreview >
        <StackCard slice={stackSlice} />
      </StackPreview>
      <ProjectsPreview>
        <ProjectCard slice={projectSlice} />
      </ProjectsPreview>
      <ContactPreview />
    </main>
  );
};

export { Home };
