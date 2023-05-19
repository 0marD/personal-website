import { StyledCTALink } from "./StyledCTALink";

interface Props {
    text: string
    to: string
    className?: string
}

const CTALink = ({ text, to, className }: Props): JSX.Element => {
    return (
        <StyledCTALink to={to} className={className}>
            {text}
        </StyledCTALink >
    );
};

export { CTALink };
