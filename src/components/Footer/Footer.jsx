import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { StyledFooter } from './StyledFooter';
const Footer = () => {
  return (
    <StyledFooter>
      <p>Visita mis redes sociales</p>
      <div className='socialLinks'>
        <a
          href='https://linkedin.com/in/omar-dhz/'
          target='_blank'
          className='socialLink'
        >
          <FaLinkedin className='icon linkedin' />
        </a>
        <a
          href='https://github.com/0marD'
          target='_blank'
          className='socialLink'
        >
          <FaGithubSquare className='icon github' />
        </a>
      </div>
    </StyledFooter>
  );
};

export { Footer };
