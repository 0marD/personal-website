import React, { useState } from 'react';
import { StyledMenuHam } from './StyledMenuHam';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

const MenuHam = ({ menuState, setMenuState }) => {
  function handleMenu() {
    setMenuState(!menuState);
    // console.log(menu);
  }
  return (
    <StyledMenuHam onClick={handleMenu}>
      <HiMenu className={`icon ${!menuState && 'icon--active'}`} />
      <HiOutlineX className={`icon ${menuState && 'icon--active'}`} />
    </StyledMenuHam>
  );
};

export { MenuHam };
