import React from "react";

interface Props {
  text: string;
  text2?: string;
  text3?: string;
  text4?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ContactMessage: React.FC<Props> = ({
  text,
  text2,
  text3,
  text4,
  onClick,
}) => {
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