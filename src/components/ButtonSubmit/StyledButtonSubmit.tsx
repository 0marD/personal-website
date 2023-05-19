import styled from "styled-components";

export const StyledButtonSubmit = styled.button`
    width: max-content;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    background-color: hsl(0, 0%, 15%);
    transition: background-color 0.3s;
    border-radius: 0.5rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-out,  background-color .3s ease-in;
    font-weight: 700;
    &:hover {
        background-color: hsl(0, 0%, 0%);
        box-shadow: 0px 5px 15px 2px hsl(0, 0%, 100%,.15);
        cursor: pointer;
    }

    &:active {
        transform: scale(0.85);
    }
`;
