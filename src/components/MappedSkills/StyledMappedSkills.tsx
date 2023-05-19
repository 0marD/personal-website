import styled from "styled-components";

export const StyledMappedSkills = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 2rem;
    .skill {
        aspect-ratio: 1/1.1;
        overflow: hidden;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 34%;
        padding: 0.5rem;
        border-radius: 1rem;
        &__image-wrapper {
            width: 80%;
            aspect-ratio: 1/1;
            display: flex;
            overflow: hidden;
        }
        &__image {
            max-width: 100%;
            max-height: 100%;
            margin: auto;
        }
        &__name {
            width: 100%;
            text-align: center;
            color: black;
            font-weight: 600;
            font-size: 1rem;
        }
    }
    @media screen and (min-width: 768px) {
        gap: 2rem;
        .skill {
            aspect-ratio: 1/1.2;
            width: 15%;
        }
    }
    @media screen and (min-width: 1024px) {
        gap: 2rem;
        .skill {
            aspect-ratio: 1/1.2;
            width: 10%;
        }
    }
`;
