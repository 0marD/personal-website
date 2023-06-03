import { Link } from "react-router-dom";
import { cvSkills, cvStack } from "../data/cvDataSkills";
import { cvEducation } from "../data/cvEducation";
import { cvExperiences } from "../data/cvExperience";
import { Experience } from "../elements/Experience";
import { Education } from "../elements/Education";
import { PersonalInfo } from "../elements/PersonalInfo";
import { CvSkillItem } from "../elements/CvSkillItem";
import { DownloadButton } from "../elements/DownloadButton";
import { CvHeadingSection } from "../elements/CvHeadingSection";

const Resume = (): JSX.Element => {
    const skills = cvSkills.map((skill, index) => (
        <CvSkillItem key={index} text={skill} />
    ));

    const stacks = cvStack.map((stackItem, index) => (
        <CvSkillItem key={index} text={stackItem} />
    ));

    return (
        <main className="resume route">
            <div className="resume__content">
                <div className="resume__section">
                    <h2 className="resume__name">Omar Díaz Hernández</h2>
                    <h4 className="resume__occupation">
                        Gestor Empresarial / Desarrollador frontend
                    </h4>
                    <PersonalInfo />
                </div>
                <div className="resume__section">
                    <CvHeadingSection text="Sobre mí" />
                    <p className="resume__paragraph">
                        Soy un híbrido entre un Ingeniero en Gestión Empresarial y un
                        Desarrollador frontend con habilidades y conocimientos en el diseño
                        de estrategias empresariales y la creación de soluciones
                        tecnológicas innovadoras.
                    </p>
                </div>
                <div className="resume__section resume__section--skills">
                    <div className="resume__subsection">
                        <CvHeadingSection text="Aptitudes" />
                        {skills}
                    </div>
                    <div className="resume__subsection">
                        <CvHeadingSection text="Stack" />
                        <div className="resume__subsection--stack">{stacks}</div>
                    </div>
                </div>
                <div className="resume__section">
                    <CvHeadingSection text="Experiencia" />
                    <Experience experience={cvExperiences} />
                </div>
                <div className="resume__section">
                    <CvHeadingSection text="Formacion" />
                    <Education education={cvEducation} />
                </div>
            </div>
            <div className="resume__buttons">
                <DownloadButton href="/src/assets/CV/cv-omar-diaz-frontend-developer.pdf" text="Descargar CV" />
                <Link to={"/"} className="resume__button">Ir a inicio</Link>
            </div>
        </main>
    );
};

export { Resume };
