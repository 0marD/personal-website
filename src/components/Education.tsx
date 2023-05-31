import { educationProps } from "../data/cvEducation";

interface Props {
  education: educationProps[];
}

const Education = ({ education }: Props): JSX.Element => {
  return (
    <div className="education">
      {education.map((education, index) => (
        <div key={index} className="education__item">
          <p className="education__institution">{education.institution}</p>
          <p className="education__period">{education.period}</p>
          <p className="education__degree">{education.degree}</p>
        </div>
      ))}
    </div>
  );
};

export { Education };
