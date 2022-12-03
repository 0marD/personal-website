import React from 'react'
import { CertificateCard } from './CertificateCard'
import certificateJS from '../assets/images/js-certificate.jpeg'
import responsiveDesign from '../assets/images/responsive-design-certificate.jpeg'
import htmlCertificate from '../assets/images/html-certificate.jpeg'


function Certifications() {
  return (
    <>
      <hr id="certificates" />
      <section className="certificates showcase">
        <h3 className="certificates__heading">Certificados</h3>
        <CertificateCard
          certificateTitle="Curso básico de JavaScript"
          certificateImage={certificateJS}
        />
        <CertificateCard
          certificateTitle="Diseño Responsivo: Maquetación diseño móvil primero"
          certificateImage={responsiveDesign}
        />
        <CertificateCard
          certificateTitle="Curso práctico de HTML y CSS"
          certificateImage={htmlCertificate}
        />
      </section>
    </>
  )
}

export { Certifications }