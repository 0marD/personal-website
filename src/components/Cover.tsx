import photo from "../assets/images/omar-picture.png";
import { Link } from "react-router-dom";
import { DownloadButton } from "../elements/DownloadButton";

const Cover = (): JSX.Element => {
    return (
        <section className="cover">
            <div className="cover__content">
                <h1 className="cover__title">
                    <span className="cover__title-greeting">Hola, soy</span>
                    <span className="cover__title-name">Omar Díaz</span>
                    <span className="cover__title-profession">Soy un desarrollador frontend</span>
                </h1>
                <figure className="cover__figure">
                    <img className="cover__image" src={photo} alt="Omar Díaz's photo" />
                </figure>
            </div>
            <div className="cover__description">
                <span className="cover__greeting">Sobre mí</span>
                <p className="cover__intro">
                    <span className="cover__intro-text">
                        Me llamo Omar Díaz Hernández y soy un apasionado desarrollador web
                        que se está introduciendo en el mundo de la tecnología.
                    </span>
                    <span className="cover__intro-text">
                        Este sitio es un recopilatorio de algunos de mis proyectos de
                        práctica que he realizado para demostrar mis habilidades y
                        conocimientos en el desarrollo web.
                    </span>
                    <span className="cover__intro-text">
                        Si está buscando un desarrollador, estaré encantado de hablar con
                        usted.
                    </span>
                </p>
                <div className="cover__buttons">
                    <DownloadButton href="/src/assets/CV/cv-omar-diaz-frontend-developer.pdf" text="Descargar CV"/>
                    <Link className="cover__online-cv-link" to={"/resume"}>Ver CV online</Link>
                </div>
            </div>
        </section>
    );
};

export { Cover };
