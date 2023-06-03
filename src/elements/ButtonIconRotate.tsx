import { AiOutlineMail } from "react-icons/ai";
import { basicsProps } from "../models/basicsProps";

const ButtonIconRotate = ({text}:basicsProps):JSX.Element => {
  return (
    <button type="submit" className="button-icon-rotate">
  <div className="icon-wrapper-1">
    <div className="icon-wrapper">
      <AiOutlineMail className="icon"/>
    </div>
  </div>
  <span>{text}</span>
</button>
  )
}

export  {ButtonIconRotate}