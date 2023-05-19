import { StyledCTAAnchor } from "./StyledCTAAnchor";


interface Props {
    text: string
    href: string | undefined
    className?: string
}

const CTAAnchor = ({ text, href, className }: Props): JSX.Element => {
    return (
        <StyledCTAAnchor href={href} target="_blank" className={className}>
            {text}
        </StyledCTAAnchor >
    );
};

export { CTAAnchor };
