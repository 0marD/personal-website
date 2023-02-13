import React, { useState } from 'react';
import { StyledSwitchTheme } from './StyledSwitchTheme';
import { BsSun, BsMoonFill } from 'react-icons/bs';

const SwitchTheme = ({ theme, changeTheme }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    changeTheme();
  };

  return (
    <StyledSwitchTheme className='switchMobile'>
      <div
        className={`selector ${toggle ? 'dark' : ''}`}
        onClick={handleToggle}
      >
        <BsSun className={`icon ${theme === 'default' && 'icon--active'}`} />
        <BsMoonFill
          className={`icon ${theme !== 'default' && 'icon--active'}`}
        />
      </div>
    </StyledSwitchTheme>
  );
};

const SwitchThemeDesk = ({ theme, changeTheme }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    changeTheme();
  };

  return (
    <StyledSwitchTheme className='switchDesk'>
      <div
        className={`selector ${toggle ? 'dark' : ''}`}
        onClick={handleToggle}
      >
        <BsSun className={`icon ${theme === 'default' && 'icon--active'}`} />
        <BsMoonFill
          className={`icon ${theme !== 'default' && 'icon--active'}`}
        />
      </div>
    </StyledSwitchTheme>
  );
};

export { SwitchTheme, SwitchThemeDesk };
