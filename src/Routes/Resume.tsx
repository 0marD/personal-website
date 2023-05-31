import { Link } from "react-router-dom";
import { CvHeadingSection } from "../components/CvHeadingSection";
import { CvSkillItem } from "../components/CvSkillItem";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { PersonalInfo } from "../components/PersonalInfo";
import { cvSkills, cvStack } from "../data/cvDataSkills";
import { cvEducation } from "../data/cvEducation";
import { cvExperiences } from "../data/cvExperience";
import { VscSmiley } from "react-icons/vsc";

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
                        <div className="resume__subsection--stack">{stacks}</div>{" "}
                    </div>
                </div>
                <div className="resume__section">
                    <CvHeadingSection text="Experiencia" />
                    <Experience experience={cvExperiences} />
                </div>
                <div className="resume__section">
                    <CvHeadingSection text="Formacion"/>
                    <Education education={cvEducation}/>
                </div>
            </div>
            <a href="/src/assets/CV/cv-omar-diaz-frontend-developer.pdf" download className="resume__button btn-style-v1">Descargar CV  <VscSmiley/></a>
            <Link to={"/"} className="resume__button button">Ir a inicio</Link>
        </main>
    );
};

export { Resume };
