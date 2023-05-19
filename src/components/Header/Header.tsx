import React from "react";
import { StyledHeader } from "./StyledHeader";

interface Props extends React.HTMLAttributes<HTMLElement> {
    imageSrc?: string;
}

const Header = ({ imageSrc, children, ...rest }: Props): JSX.Element => {
    return (
        <StyledHeader {...rest}>
            {imageSrc && (
                <img
                    className="header__logo"
                    src={imageSrc}
                    alt="Omar Díaz's logo"
                />
            )}
            {children}
        </StyledHeader>
    );
};

export { Header };
