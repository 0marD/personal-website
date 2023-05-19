import { useState } from "react";

interface LinkInfo {
    href: string;
    label: string;
}

const useNavBarLogic = () => {
    const [activeLink, setActiveLink] = useState("");

    const links: LinkInfo[] = [
        { href: "/", label: "Inicio" },
        { href: "/skills", label: "Competencias" },
        { href: "/projects", label: "Proyectos" },
        { href: "/contact", label: "Escríbeme" },
    ];

    return {
        links,
        activeLink,
        setActiveLink,
    };
};

export { useNavBarLogic };
