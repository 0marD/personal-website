import { experienceProps } from "../data/cvExperience";

interface Props {
  experience: experienceProps[];
}

const Experience = ({ experience }: Props) => {
  return (
    <div className="experience">
      {experience.map((experience, index) => (
        <div key={index} className="experience__item">
          <h5 className="experience__company">{experience.companyName}</h5>
          <p className="experience__details">
            {experience.role} | {experience.duration}
          </p>
          <div className="experience__description">
            <p>{experience.description}</p>
            <ul className="experience__activities">
              {experience.activities?.map((item, index) => (
                <li key={index} className="experience__activity">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Experience };
