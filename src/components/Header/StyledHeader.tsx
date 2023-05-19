import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    padding: 0.5rem 1rem;
    position: fixed;
    z-index: 4;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hsl(16, 100%, 40%);
    .header__logo {
        height: 2.5rem;
    }
    /* desk version */
    @media screen and (min-width: 768px) {
        padding: 0 1rem;
        .header__logo {
            margin: 0.5rem 0;
        }
    }
`;
