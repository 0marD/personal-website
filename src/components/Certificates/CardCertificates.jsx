import React from 'react';
import { StyledCardCertificates } from './StyledCardCertificates';

const CardCertificates = ({ certificate: { courseName, image, id } }) => {
  return (
    <StyledCardCertificates key={id} className='certificate'>
      <figure className='imageContainer'>
        <img src={image} alt='certificate image' className='certificateImage' />
      </figure>
      <p className='content__title'>{courseName}</p>
    </StyledCardCertificates>
  );
};

export { CardCertificates };
