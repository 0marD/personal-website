import React from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { StyledUpArrow } from './StyledUpArrow';
const UpArrow = () => {
  return (
    <StyledUpArrow href='#home' title='Ir al inicio'>
      <BsFillArrowUpCircleFill className='icon' />
    </StyledUpArrow>
  );
};

export { UpArrow };
