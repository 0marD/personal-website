import advices from "../assets/projectImages/advices.jpeg";
import todo from "../assets/projectImages/todo.jpeg";
import urlshorter from "../assets/projectImages/urlshorter.jpeg";

export interface Project {
    name: string;
    src: string;
    description: string;
    url: string;
}

export const projectsData: Project[] = [
    {
        name: "Advices generator",
        src: advices,
        description:
            "Este proyecto consiste en una página la cual se genera consejos aleatoriamente al presionar un botón empleando una API. Este fue creado con JavaScript, HTML y CSS vanilla.",
        url: "https://adivices-generator-app-omardiaz.netlify.app/",
    },
    {
        name: "Todo app",
        src: todo,
        description:
            "Este proyecto consiste en una aplicación en la cual puedes agregar tareas por hacer, donde puedes reordenar la lista a placer y cambiar entre los modos oscuro y claro. Este fue creado con React.js, empleando local storage, styled-components y custom hooks",
        url: "https://todo-app-frontendmentor-omar-diaz.vercel.app/",
    },
    {
        name: "URL shorter",
        src: urlshorter,
        description:
            "Este proyecto consiste en una página en la cual se pueden acortar URLs empleando una API. Este fue creado con Javascripit, HTML y CSS vanilla",
        url: "https://url-shortening-page-with-api-omardiaz.netlify.app/",
    },
];
