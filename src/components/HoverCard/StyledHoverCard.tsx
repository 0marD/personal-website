import styled from "styled-components";

export const StyledHoverCard = styled.div`
    display: none;
    padding: 4rem 0;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 7rem 2rem;

    @media screen and (min-width: 768px) {
        display: grid;
    }

    &.preview {
        grid-template-rows: auto;
    }

    .card {
        position: relative;
        aspect-ratio: inherit;
        width: 100%;
        aspect-ratio: 2/1;
        font-size: 1vw;
        display: grid;
        place-items: center;

        &__title {
            font-weight: 700;
            font-size: 1.25rem;
        }
        &__content {
            padding: 0.25rem;
            background-color: hsl(0, 0%, 100%);
            color: hsl(0, 0%, 0%);
            border-radius: 0.5rem;
            position: absolute;
            width: 90%;
            height: auto;
            overflow: hidden;
            transition: top 0.3s, bottom 0.3s;
            height: 0;

            &--top {
                bottom: 50%;
                transition: top 0.3s, bottom 0.3s;
            }
            &--bottom {
                top: 50%;
                transition: top 0.3s, bottom 0.3s;
            }
        }

        &__image {
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            border-radius: 1rem;
            display: block;
            position: absolute;
            top: 0;
        }

        &__cta {
            background-color: hsl(17, 100%, 40%);
            color: white;
            padding: 0.25rem 1rem;
            border-radius: 0.25rem;
            font-weight: 700;
            transition: background-color, color, 0.3s;
            font-size: 0.9rem;
            &:hover {
                background-color: hsl(17, 100%, 100%);
                color: hsl(17, 100%, 40%);
                box-shadow: 0 0 10px 2px hsl(0, 0%, 0%, 0.5);
            }
        }
        &:hover {
            transition: transform 0.3s;

            .card__image {
                box-shadow: 0 0 10px 2px hsla(0, 0%, 0%);
            }
            .card__content {
                height: auto;
            }
            .card__content--top {
                padding: 0.5rem 1rem;
                padding-bottom: 2rem;
                transition: top 0.3s, bottom 0.3s;
                bottom: calc(100% - 1.5rem);
            }
            .card__content--bottom {
                padding: 0.5rem 1rem;
                display: grid;
                place-content: center;
                padding-top: 2rem;
                transition: top 0.3s, bottom 0.3s;
                top: calc(100% - 1.5rem);
            }
        }
    }
`;
