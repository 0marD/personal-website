import styled from "styled-components";

export const StyledNavModal = styled.div`
    background-color: hsla(0, 0%, 0%, 0.25);
    width: 100%;
    z-index: 4;
    position: fixed;
    display: grid;
    left: 100%;
    top: 3.5rem;
    right: 0;
    bottom: 0;
    overflow: hidden;
    transition: left 0.3s;
    display: flex;
    backdrop-filter: blur(3px);
    &.active {
        left: 0;
    }
    .navbar {
        padding-top:1rem ;
        width: 70%;
        position: absolute;
        inset: 0 0 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        gap: 1rem;
        }
`;
