import styled from "styled-components";

export const StyledContact = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 4rem 2.5rem;

    .form {
        position: relative;
        margin: auto 0;
    }
    .form-section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    @media screen and (min-width: 768px) {
        padding: 4.5rem 2em;

        .form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        .form-section {
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            &:last-child{
                gap: 2rem;

            }
        }
    }
`;
