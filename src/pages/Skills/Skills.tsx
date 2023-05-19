import { CTALink } from "../../components/CTALink/CTALink";
import { MappedSkills } from "../../components/MappedSkills/MappedSkills";
import { SubHeading } from "../../components/SubHeading/SubHeading";
import { StyledSkills } from "./StyledSkills";

const Skills = (): JSX.Element => {
    return (
        <StyledSkills>
            <SubHeading text='Competencias' />
            <MappedSkills />
            <CTALink text='Ir al inicio' to='/' />
        </StyledSkills>
    )
}

export { Skills };