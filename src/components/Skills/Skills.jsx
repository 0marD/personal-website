import React from 'react';
import html from '../../assets/svg/html.svg';
import css from '../../assets/svg/css.svg';
import js from '../../assets/svg/js.svg';
import react from '../../assets/svg/react.svg';
import vite from '../../assets/svg/vitejs.svg';
import sass from '../../assets/svg/sass.svg';
import api from '../../assets/svg/apiUllustration.svg';
import styled from '../../assets/svg/styled.svg';
import figma from '../../assets/svg/figma.svg';
import slack from '../../assets/svg/slack.svg';
import notion from '../../assets/svg/notion.svg';
import git from '../../assets/svg/git.svg';
import github from '../../assets/svg/github.svg';
import nodejs from '../../assets/svg/nodejs.svg';
import java from '../../assets/svg/java.svg';
import python from '../../assets/svg/python.svg';
import { StyledSkills } from './SyledSkills';

const Skills = () => {
  const skillsData = [
    {
      name: 'HTML',
      src: html,
      alt: 'HTML logo',
    },
    {
      name: 'CSS',
      src: css,
      alt: 'CSS logo',
    },
    {
      name: 'JavaScript',
      src: js,
      alt: 'JavaScript logo',
    },
    {
      name: 'React JS',
      src: react,
      alt: 'React JS logo',
    },
    {
      name: 'Vite.JS',
      src: vite,
      alt: 'Vite.JS logo',
    },
    {
      name: 'Sass',
      src: sass,
      alt: 'Sass logo',
    },
    {
      name: 'Cosumo de API',
      src: api,
      alt: 'Api representation',
    },
    {
      name: 'Styled-components',
      src: styled,
      alt: 'Styled-components logo',
    },
    {
      name: 'Notion',
      src: notion,
      alt: 'Notion logo',
    },
    {
      name: 'Figma',
      src: figma,
      alt: 'Figma logo',
    },
    {
      name: 'Slack',
      src: slack,
      alt: 'Slack logo',
    },
    {
      name: 'Node.JS',
      src: nodejs,
      alt: 'Node.JS logo',
    },
    {
      name: 'GitHub',
      src: github,
      alt: 'GitHub logo',
    },
    {
      name: 'Git',
      src: git,
      alt: 'Git logo',
    },
    {
      name: 'Python',
      src: python,
      alt: 'Phyton logo',
    },
    {
      name: 'Java',
      src: java,
      alt: 'Java logo',
    },
  ];

  return (
    <>
      <hr id='skills' />
      <StyledSkills>
        <h3>Competencias</h3>
        <div className='skills'>
          {skillsData.map((skill) => (
            <div className='skill' key={skill.name}>
              <span className='skill__name'>{skill.name}</span>
              <img src={skill.src} alt={skill.alt} className='skill__image' />
            </div>
          ))}
        </div>
      </StyledSkills>
    </>
  );
};

export { Skills };
