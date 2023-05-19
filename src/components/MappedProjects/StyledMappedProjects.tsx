import styled from "styled-components";

export const StyledMappedProjects = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 3rem;

    .project {
        width: 100%;
        border-radius: 2rem;
        position: relative;

        &__image-wrapper {
            width: 100%;
            aspect-ratio: 1/0.65;
            overflow: hidden;
            display: flex;
            border-radius: 2rem;
        }
        &__image {
            width: 100%;
            min-height: 100%;
            display: block;
            margin: auto;
            margin-top: 0;
            object-fit: cover;
            transition: transform 0.3s;
            &:hover {
                transform: scale(1.1);
            }
        }
        &__details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: hsl(16, 100%, 50%);
            height: 2.5rem;
        }

        &__description {
            display: none;
        }
        &__link {
            position: absolute;
            padding: 0.5rem 0;
            background-color: black;
            display: grid;
            place-items: center;
            top: calc(100% - 1.15rem);
            left: 20%;
            right: 20%;
            width: auto;
            border-radius: 1rem;
            border: 1px white solid;
            transition: background-color 0.3s;
            &:hover {
                background-color: hsl(16, 100%, 50%);
                border-color: hsl(16, 100%, 50%);
                cursor: pointer;
            }
        }
        &__name {
            display: none;
        }
    }
    @media screen and (min-width: 768px) {
        display: none;
        gap: 3rem 2rem;
        .project {
            width: 80%;
            max-width: 28rem;
        }
    }
    @media screen and (min-width: 1024px) {
        display: none;
    }
`;
