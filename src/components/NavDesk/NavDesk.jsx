import React from 'react';
import { useSelected } from '../../hooks/useSelected';
import { StyledNavDesk } from './StyledNavDesk';

const NavDesk = () => {
  const { selected, setSelected } = useSelected();
  const activeLink = (index) => {
    setSelected(index);
  };
  return (
    <StyledNavDesk>
      <li
        className={`${selected === 0 ? 'selected' : ''}`}
        onClick={() => {
          activeLink(0);
        }}
      >
        <a href='#home'>Inicio</a>
      </li>
      <li
        className={`${selected === 1 ? 'selected' : ''}`}
        onClick={() => {
          activeLink(1);
        }}
      >
        <a href='#skills'>Competencias</a>
      </li>
      <li
        className={`${selected === 2 ? 'selected' : ''}`}
        onClick={() => {
          activeLink(2);
        }}
      >
        <a href='#projects'>Proyectos</a>
      </li>
      <li
        className={`${selected === 3 ? 'selected' : ''}`}
        onClick={() => {
          activeLink(3);
        }}
      >
        <a href='#certificates'>Certificados</a>
      </li>
      <li
      // className={`${selected === 4 ? 'selected' : ''}`}
      // onClick={() => {
      //   activeLink(4);
      //
      // }}
      >
        <a href='#contact'>Escríbeme</a>
      </li>
    </StyledNavDesk>
  );
};

export { NavDesk };
