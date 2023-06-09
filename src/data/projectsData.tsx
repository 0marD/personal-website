import advices from "../assets/projectImages/advices-generator.jpeg";
import todo from "../assets/projectImages/todo-app.jpeg";
import urlshorter from "/src/assets/projectImages/url-shorter.jpeg";
import apicountries from "../assets/projectImages/api-countries.jpeg";
import spacetourism from "../assets/projectImages/space-tourism.jpeg"
export interface Stack {
    stack: string;
    code:string;
}

export interface Project {
    name: string;
    src: string;
    description: string;
    url: string;
    direction: string;
    github: string;
    stack?: Stack[];
}

export const projectsData: Project[] = [
    {
        name: "Space tourism multi-page website",
        direction: "space-tourism",
        src: spacetourism,
        description:
            "Este proyecto consiste en un sitio web multipagína el cual fue creado utilzando react.js, typescript, redux toolkit y sass",
        url: "https://space-tourism-multi-page-website-khaki.vercel.app/",
        github: "https://github.com/0marD/Space-tourism-multi-page-website",
    },
    {
        name: "API rest countries",
        direction: "api-countries",
        src: apicountries,
        description:
            "Este proyecto consiste en una el al cual puedes buscar datos generales sobre cualquiers pais. Esto fue creado con React.js, Redux Toolkit y Typescript",
        url: "https://rest-countries-api-kappa-nine.vercel.app/",
        github: "https://github.com/0marD/Rest-countries-API",
        stack: [
            { stack: "Redux Toolkit", code: "redux" }, 
            { stack: "Typescript",code:"ts" },
            { stack: "React.js",code:"react" },
            { stack: "Router-dom",code:"r-dom" },
            { stack: "Vite.js",code:"vite" },
            { stack: "JSON",code:"json" },
        ],
    },
    {
        name: "Advices generator",
        direction: "advices-generator",
        src: advices,
        description:
            "Este proyecto consiste en una página la cual se genera consejos aleatoriamente al presionar un botón empleando una API. Este fue creado con JavaScript, HTML y CSS vanilla.",
        url: "https://adivices-generator-app-omardiaz.netlify.app/",
        github: "https://github.com/0marD/Advice-Generator-app",
    },
    {
        name: "Todo-app",
        direction: "todo-app",
        src: todo,
        description:
            "Este proyecto consiste en una aplicación en la cual puedes agregar tareas por hacer, donde puedes reordenar la lista a placer y cambiar entre los modos oscuro y claro. Este fue creado con React.js, empleando local storage, styled-components y custom hooks",
        url: "https://todo-app-frontendmentor-omar-diaz.vercel.app/",
        github: "https://github.com/0marD/todo-app-frontendmentor",
    },
    {
        name: "URL shorter",
        direction: "url-shorter",
        src: urlshorter,
        description:
            "Este proyecto consiste en una página en la cual se pueden acortar URLs empleando una API. Este fue creado con Javascripit, HTML y CSS vanilla",
        url: "https://url-shortening-page-with-api-omardiaz.netlify.app/",
        github: "https://github.com/0marD/URL-shortening-API-landing-page",
    },
];
