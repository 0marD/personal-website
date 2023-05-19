import { About } from "../../components/About/About";
import { CTALink } from "../../components/CTALink/CTALink";
import { Hero } from "../../components/Hero/Hero";
import { ProjectsPreview } from "../../components/ProjectsPreview/ProjectsPreview";
import { SkillsPreview } from "../../components/SkillsPreview/SkillsPreview";
import { StyledHome } from "./StyledHome";

const Home = (): JSX.Element => {
    return (
        <StyledHome>
            <div className="hero-about">
            <Hero />
            <About />
            </div>
            <SkillsPreview />
            <ProjectsPreview />
            <div className="cta-container">

            <CTALink
                text="¡Vamos, escríbeme!"
                to="/contact"
                className="home-cta animated"
            />
            </div>
        </StyledHome>
    );
};

export { Home };
