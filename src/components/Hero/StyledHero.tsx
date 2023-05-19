import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 1rem;
  width: 100%;
padding-top: 0;
  .hero__greeting {
    background-color: hsl(16, 100%, 50%);
    width: max-content;
    font-weight: 400;
    padding: 0.25rem 0.5rem;
  }

  .hero__name {
    font-size: 3rem;
  }

  .hero__subtitle {
    font-size: 1rem;
    font-weight: 400;
    color: hsl(16, 100%, 60%);
  }

  .hero__bottom {
    display: flex;
    justify-content: center;
    padding-top: 3rem;
  }

  .hero__image-wrap {
    width: 40%;
    aspect-ratio: 1/1;
    display: grid;
    place-items: center;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid white;
  }

  .hero__image {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    gap: 1rem;
    .hero__image-wrap {
      width: 50%;
    }
    .hero__bottom {
      padding: 0;
      margin: 0;
      padding: 0%;
      width: fit-content;
    }
  }
`;
