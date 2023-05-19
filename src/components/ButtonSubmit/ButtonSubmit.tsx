
import { StyledButtonSubmit } from "./StyledButtonSubmit"

interface Props {
    className?: string;
    text: string
}

const ButtonSubmit = ({ className, text }: Props): JSX.Element => {
    const buttontClasses = `input ${className ? className : ''}`;

    return (
        <StyledButtonSubmit type="submit" className={`button ${buttontClasses}`}>
            {text}
        </StyledButtonSubmit>
    )
}

export { ButtonSubmit }
