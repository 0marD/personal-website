import { StyledLogo } from './StyledLogo';

const Logo = () => {
  return (
    <StyledLogo>
      <div className='top'>
        <div className='top__name'>Omar</div>
        <div className='top__lastName'>Díaz</div>
      </div>
      <div className='bottom'>
        <div className='bottom__occupation'>Frontend Developer</div>
        <div className='bottom__line'></div>
      </div>
    </StyledLogo>
  );
};

export { Logo };
