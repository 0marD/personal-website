import { AiOutlineArrowRight } from "react-icons/ai";
import { basicsProps } from "../models/basicsProps";
import { Link } from "react-router-dom";

const ButtonNeon = ({ className, text, linkTo }: basicsProps): JSX.Element => {
    return (
        <Link to={`/${linkTo}`} className={`button-neon ${className}`}> {text}
            <div className="icon">
                <AiOutlineArrowRight />
            </div>
        </Link>
    )
}

export { ButtonNeon }