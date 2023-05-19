import { StyledAbout } from "./StyledAbout";

function About(): JSX.Element {
    return (
        <StyledAbout className="about">
            <span className="about__greeting">Hola de nuevo</span>
            <p className="about__description">
                <span>
                    Me llamo Omar Díaz Hernández y soy un apasionado desarrollador
                    web que se está introduciendo en el mundo de la tecnología.
                </span>
                <span>
                    Este sitio es un recopilatorio de algunos de mis proyectos de
                    práctica que he realizado para demostrar mis habilidades y
                    conocimientos en el desarrollo web.
                </span>
                <span>Si está buscando un desarrollador, estaré encantado de hablar
                    con usted.
                </span>
            </p>
        </StyledAbout>
    );
}

export { About };
