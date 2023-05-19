import styled from "styled-components";

export const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1em;
  border-top: 2px dashed hsl(17, 100%, 50%);
  border-bottom: 2px dashed hsl(17, 100%, 50%);
  background-color: hsl(0, 0%, 5%);
  width: 100%;
  .about {
    &__greeting {
      border-bottom: 2px solid hsl(17, 100%, 50%);
      width: fit-content;
      padding-bottom: 2px;
      font-weight: 500;
      font-size: 1.1rem;
    }
    &__description {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      line-height: 1.5;
      justify-content: center;
    }
  }
  @media screen and (min-width: 768px) {
    border-color: transparent;
    background-color: transparent;
    padding: 2rem 2em;
    max-width: 600px;
    height: 21rem;
  }
`;
