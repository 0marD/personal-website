import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "./StyledNavbar";
import { useNavBarLogic } from "./NavBarLogic";

interface Props {
    className?: string;
}

const Navbar = ({ className }: Props): JSX.Element => {
    const { links, activeLink, setActiveLink } = useNavBarLogic();

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const href =
            (event.target as HTMLAnchorElement).getAttribute("href") || "";
        setActiveLink(href);
    };

    return (
        <StyledNavbar className={`navbar ${className}`}>
            {links.map(({ href, label }) => (
                <Link
                    key={href}
                    className={`link ${activeLink === href ? "active" : ""}`}
                    to={href}
                    onClick={handleLinkClick}
                >
                    {label}
                </Link>
            ))}
        </StyledNavbar>
    );
};

export { Navbar };
