import skillsData from '../../data/skillsData';
import { StyledMappedSkills } from './StyledMappedSkills';

interface Props {
    slice?: number;
}

const MappedSkills = ({ slice }: Props): JSX.Element => {

    const skillsToRender = skillsData.slice(0, slice);

    return (
        <StyledMappedSkills>
            {skillsToRender.map((skill) => (
                <div className="skill" key={skill.name}>
                    <div className="skill__image-wrapper">
                        <img
                            className="skill__image"
                            src={skill.src}
                            alt={skill.alt}
                        />
                    </div>
                    <span className="skill__name">{skill.name}</span>
                </div>
            ))}
        </StyledMappedSkills>
    );
};

export { MappedSkills }
