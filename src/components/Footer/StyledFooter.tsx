import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    /* position: absolute; */
    margin: auto;
    margin-bottom: 0;
    width: 100%;
    padding: .75rem 1rem;
    background-color: hsl(0, 0%, 20%);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    .footer__text{
text-align: center;
    }
    div {
        display: flex;
        gap: 1.5rem;
        .footer__link {
            font-size: 2rem;
            transition: transform 0.3s;
            &:hover {
                transform: scale(1.35);
            }
        }
    }
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;
