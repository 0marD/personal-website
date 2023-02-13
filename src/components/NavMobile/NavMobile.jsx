import React, { useRef, useState } from 'react';
import { useSelected } from '../../hooks/useSelected';
import { StyledNavMobile } from './StyledNavMobile';

const NavMobile = ({ menuState, setMenuState, children }) => {
  const { selected, setSelected } = useSelected();
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setMenuState(false);
    }
  };

  const handelClickA = () => {
    setMenuState(false);
  };
  const activeLink = (index) => {
    setSelected(index);
  };
  return (
    <StyledNavMobile
      className={`${menuState ? 'isActive' : ''}`}
      onClick={handleClickOutside}
    >
      <ul className='bgInner' ref={ref}>
        <li
          className={`${selected === 0 ? 'selected' : ''}`}
          onClick={() => {
            activeLink(0);
            handelClickA();
          }}
        >
          <a href='#home'>Inicio</a>
        </li>
        <li
          className={`${selected === 1 ? 'selected' : ''}`}
          onClick={() => {
            activeLink(1);
            handelClickA();
          }}
        >
          <a href='#skills'>Competencias</a>
        </li>
        <li
          className={`${selected === 2 ? 'selected' : ''}`}
          onClick={() => {
            activeLink(2);
            handelClickA();
          }}
        >
          <a href='#projects'>Proyectos</a>
        </li>
        <li
          className={`${selected === 3 ? 'selected' : ''}`}
          onClick={() => {
            activeLink(3);
            handelClickA();
          }}
        >
          <a href='#certificates'>Certificados</a>
        </li>
        <li
          className={`${selected === 4 ? 'selected' : ''}`}
          onClick={() => {
            activeLink(4);
            handelClickA();
          }}
        >
          <a href='#contact'>Contacto</a>
        </li>
        {children}
      </ul>
    </StyledNavMobile>
  );
};

export { NavMobile };
