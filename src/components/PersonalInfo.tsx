import { generateEmail, generatePhoneNumber } from "../functions/personalInfo";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const PersonalInfo = (): JSX.Element => {
  return (
    <div className="personal-info">
      <p className="personal-info__item">
        <ImLocation className="personal-info__icon" />
        <span className="personal-info__value">Chapala, Jalisco, México</span>
      </p>
      <p className="personal-info__item">
        <BsFillTelephoneFill className="personal-info__icon" />
        {generatePhoneNumber()}
      </p>
      <p className="personal-info__item">
        <HiMail className="personal-info__icon" />
        {generateEmail()}
      </p>
      <p className="personal-info__item">
        <BsGithub className="personal-info__icon" />
        <a href="https://github.com/0marD" target="_blank" className="personal-info__link">
          https://github.com/0marD
        </a>
      </p>
      <p className="personal-info__item">
        <BsLinkedin className="personal-info__icon" />
        <a
          href="https://www.linkedin.com/in/omar-diaz-hdz/"
          className="personal-info__link" target="_blank"
        >
          https://www.linkedin.com/in/omar-diaz-hdz/
        </a>
      </p>
    </div>
  );
};

export { PersonalInfo };
