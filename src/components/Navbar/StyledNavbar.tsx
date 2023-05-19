import styled from "styled-components";

export const StyledNavbar = styled.nav`
    background-color: hsl(17, 100%, 0%);
    
    &.navbar-desk {
        display: none;
    }

    .link {
        text-shadow: 2px 2px 20px black;
        font-size: 1.25rem;
        font-weight: 700;
        transition: color 0.3s;
        min-width: 9.1875rem;
        text-align: center;
        position: relative;
        padding: 0.5rem;
        &::after {
            position: absolute;
            transition: right, left, 0.3s;
            content: "";
            bottom: 0;
            right: 50%;
            left: 50%;
            background-color: hsl(17, 100%, 50%);
        }
        &.active {
            &::after {
                right: 0;
                left: 0;
                height: 3px;
            }
        }
        &:hover {
            &::after {
                right: 0;
                left: 0;
                height: 3px;
            }
        }
        &:hover {
            color: hsl(17, 100%, 50%);
            text-shadow: 2px 2px 20px hsl(17, 100%, 100%, 0.15);
        }
    }

    /* desk version */
    @media screen and (min-width: 768px) {
        background-color: transparent;

        &.navbar-desk {
            display: flex;

            .link {
                text-shadow: none;
                height: 100%;
                display: block;
                width: min-content;
                min-width: unset;

                &:active {
                    transform: scale(0.9);
                }
                &:hover {
                    color: hsl(0, 0%, 100%);
                    text-shadow: 2px 2px 20px hsl(17, 100%, 0%, 0.15);
                }
                &::after {
                    background-color: hsl(0, 0%, 100%);
                    bottom: -0.35rem;
                    height: 4px;
                }
            }
        }
    }
`;
