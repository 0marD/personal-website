import React from "react";
import { StyledContactMessage } from "./StyledContactMessage";

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
    <StyledContactMessage>
      <div className="content">
        <p className="text">
          {text}
          <br />
          {text2}
          <br />
          {text3}
          <br />
          {text4}
        </p>
        <button className="button" onClick={onClick}>
          Aceptar
        </button>
      </div>
    </StyledContactMessage>
  );
};

export { ContactMessage };