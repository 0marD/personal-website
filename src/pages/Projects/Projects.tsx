import { StyledProjects } from "./StyledProjects";
import { MappedProjects } from "../../components/MappedProjects/MappedProjects";
import { SubHeading } from "../../components/SubHeading/SubHeading";
import { CTALink } from "../../components/CTALink/CTALink";
import { HoverCard } from "../../components/HoverCard/HoverCard";

const Projects = (): JSX.Element => {
    return (
        <StyledProjects>
            <SubHeading text='Proyectos' />
            <MappedProjects />
            <HoverCard />
            <CTALink text='Ir al inicio' to='/' />
        </StyledProjects>
    );
};

export { Projects };
