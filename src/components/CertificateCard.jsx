import React, { useState } from 'react'


function CertificateCard(props) {

  return (
    <div className="certificateCard">
      <figure className="certificateCard__image">
        <img src={props.certificateImage} alt="Certificate image" className="certificateCard__image-img" />
      </figure>
      <p className="certificateCard__title">{props.certificateTitle}</p>
    </div >
  )
}

export { CertificateCard }