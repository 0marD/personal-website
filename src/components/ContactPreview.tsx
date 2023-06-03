import mail from '../assets/illustrations/mailbox.svg'
import { ButtonNeon } from '../elements/ButtonNeon'

const ContactPreview = ():JSX.Element => {
  return (
    <div className="contact-preview">
        <h3 className='contact-preview__heading'>Contacto</h3>
      <div className="contact-preview__content">
      <figure className='contact-preview__figure'>
            <img className='contact-preview__image' src={mail} alt="Mailbox illustration" />
        </figure>
        <ButtonNeon linkTo='contact' text='¡Vamos, escríbeme!'/>
      </div>
    </div>
  )
}

export  {ContactPreview}