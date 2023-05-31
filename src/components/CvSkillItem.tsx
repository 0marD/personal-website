import { AiFillCheckCircle } from "react-icons/ai";

interface Props {
  text: string;
}

const CvSkillItem = ({ text }: Props): JSX.Element => {
  return (
    <div className="cv-skill">
      <AiFillCheckCircle className="cv-skill__icon" />
      <span className="cv-skill__text">{text}</span>
    </div>
  );
}

export { CvSkillItem };
