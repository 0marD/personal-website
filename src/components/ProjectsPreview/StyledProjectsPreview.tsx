import styled from "styled-components";

export const StyledProjectsPreview = styled.section`
    padding: 2rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    border-top: 2px dashed hsl(17, 100%, 50%);
    border-bottom: 2px dashed hsl(17, 100%, 50%);
    background-color: hsl(0, 0%, 5%);
    @media screen and (min-width: 768px) {
    padding: 2rem 2em;
    background-color: transparent;
    border-color: transparent;
    }
`;
