import html from "../assets/skillImages/html.svg";
import css from "../assets/skillImages/css.svg";
import js from "../assets/skillImages/js.svg";
import react from "../assets/skillImages/react.svg";
import vitejs from "../assets/skillImages/vitejs.svg";
import sass from "../assets/skillImages/sass.svg";
import apiUllustration from "../assets/skillImages/apiUllustration.svg";
import styled from "../assets/skillImages/styled.svg";
import notion from "../assets/skillImages/notion.svg";
import figma from "../assets/skillImages/figma.svg";
import slack from "../assets/skillImages/slack.svg";
import nodejs from "../assets/skillImages/nodejs.svg";
import github from "../assets/skillImages/github.svg";
import git from "../assets/skillImages/git.svg";
import python from "../assets/skillImages/python.svg";
import java from "../assets/skillImages/java.svg";

interface Skill {
    name: string;
    src: string;
    alt: string;
}

const skillsData: Skill[] = [
    {
        name: "HTML",
        src: html,
        alt: "HTML logo"
    },
    {
        name: "CSS",
        src: css,
        alt: "CSS logo"
    },
    {
        name: "JavaScript",
        src: js,
        alt: "JavaScript logo"
    },
    {
        name: "React JS",
        src: react,
        alt: "React JS logo"
    },
    {
        name: "Vite.JS",
        src: vitejs,
        alt: "Vite.JS logo"
    },
    {
        name: "Sass",
        src: sass,
        alt: "Sass logo"
    },
    {
        name: "Consumo de API",
        src: apiUllustration,
        alt: "API representation"
    },
    {
        name: "Styled-components",
        src: styled,
        alt: "Styled-components logo"
    },
    {
        name: "Notion",
        src: notion,
        alt: "Notion logo"
    },
    {
        name: "Figma",
        src: figma,
        alt: "Figma logo"
    },
    {
        name: "Slack",
        src: slack,
        alt: "Slack logo"
    },
    {
        name: "Node.JS",
        src: nodejs,
        alt: "Node.JS logo"
    },
    {
        name: "GitHub",
        src: github,
        alt: "GitHub logo"
    },
    {
        name: "Git",
        src: git,
        alt: "Git logo"
    },
    {
        name: "Python",
        src: python,
        alt: "Python logo"
    },
    {
        name: "Java",
        src: java,
        alt: "Java logo"
    }
];

export default skillsData;
