import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCTALink = styled(Link)`
    display: inline-block;
    padding: 12px 24px;
    border: 1px solid hsl(0, 0%, 30%);
    border-radius: 4px;
    transition-property: color, border, transform;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
    position: relative;
    overflow: hidden;
    font-size: 1.2rem;
    color: inherit;
    z-index: 1;
    margin: 0 auto;
  

    &:before {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scaleY(1) scaleX(1.25);
        top: 100%;
        width: 140%;
        height: 180%;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 50%;
        display: block;
        transition-property: top, background-color, transform;
        transition-duration: 0.5s, 0.5s, 0.5s;
        transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
        transition-delay: 0.1s;
        z-index: -1;
    }

    &:after {
        content: "";
        position: absolute;
        left: 55%;
        transform: translateX(-50%) scaleY(1) scaleX(1.45);
        top: 180%;
        width: 160%;
        height: 190%;
        background-color: hsl(17, 100%, 50%);
        border-radius: 50%;
        display: block;
        transition-property: top, background-color, transform;
        transition-duration: 0.5s, 0.5s, 0.5s;
        transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
        transition-delay: 0.1s;
        z-index: -1;
    }

    &:hover {
        color: #ffffff;
        border: 1px solid hsl(17, 100%, 50%);

        &:before {
            top: -35%;
            background-color: hsl(17, 100%, 50%);
            transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
        }

        &:after {
            top: -45%;
            background-color: hsl(17, 100%, 50%);
            transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
        }
    }

    &:active {
        transform: scale(0.85);
    }
`;
