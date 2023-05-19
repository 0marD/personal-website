import styled from "styled-components";

export const StyledHamBtn = styled.div`
    width: 2rem;
    aspect-ratio: 1/1;
    display: grid;
    place-items: center;
    overflow: hidden;
    transition: transform 0.3s;
    @media screen and (min-width: 768px) {
        display: none;
    }
    &:hover {
        cursor: pointer;
        & .line {
            transition: background-color 0.3s;
            background-color: hsl(17, 100%, 0%);
        }
    }

    &:active {
        transform: scale(0.8);
    }

    .line {
        background-color: white;
        width: inherit;
        height: 0.25rem;
        border-radius: 1rem;
        transition: transform 0.3s;

        &.active {
            position: absolute;
            inset: unset;
            transition: transform 0.3s;
        }
        &:first-child.active {
            transform: rotate(45deg);
        }

        &:nth-child(2).active {
            transform: rotate(-135deg);
            opacity: 0;
        }

        &:last-child.active {
            transform: rotate(-45deg);
        }
    }
`;
