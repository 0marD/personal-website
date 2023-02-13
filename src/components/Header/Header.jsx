import React from 'react';
import { StyledHeader } from './StyledHeader';

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export { Header };
