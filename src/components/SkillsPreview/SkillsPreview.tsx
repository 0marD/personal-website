import { CTALink } from '../CTALink/CTALink';
import { MappedSkills } from '../MappedSkills/MappedSkills';
import { SubHeading } from '../SubHeading/SubHeading';
import { StyledSkillsPreview } from './StyledSkillsPreview';
import { useSkillsPreview } from './useSkillsPreview';

const SkillsPreview = (): JSX.Element => {
    const { slice } = useSkillsPreview();

    return (
        <StyledSkillsPreview>
            <SubHeading text='Competencias' />
            <MappedSkills slice={slice} />
            <CTALink text='Ver todo' to='/Skills' />
        </StyledSkillsPreview>
    );
};

export { SkillsPreview };
