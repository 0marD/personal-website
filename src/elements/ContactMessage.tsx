import { ContactMessageProps } from "../models/ContactMessageProps";

const ContactMessage= ({
    text,
    text2,
    text3,
    text4,
    onClick,
  }:ContactMessageProps):JSX.Element => {
    return (
      <div className="contact-message">
        <div className="contact-message__content">
          <p className="contact-message__text">
            {text}
            <br />
            {text2}
            <br />
            {text3}
            <br />
            {text4}
          </p>
          <button className="contact-message__button button" onClick={onClick}>
            Aceptar
          </button>
        </div>
      </div>
    );
  };
  
  export { ContactMessage };