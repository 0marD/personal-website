import styled from "styled-components";

export const StyledHome = styled.main`
  padding: 5rem 0;
  padding-bottom: 2em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3.5rem 0;
  position: relative;

  .home-cta {
    margin: 2rem 0;
    border: 2px solid hsl(17, 100%, 50%, 0.5);
    box-shadow: 0px 2px 10px 1px hsl(0, 0%, 100%, 0.1);
    transition: box-shadow 0.3s, border 0.4s;

    &:hover {
      box-shadow: 0px 2px 10px 1px hsl(0, 0%, 100%, 0.5);
      border: 2px solid hsl(17, 100%, 50%);
    }
  }
  @media screen and (min-width: 768px) {
    .cta-container {
      width: 100%;
      border-top: 2px dashed hsl(17, 100%, 50%);
      border-bottom: 2px dashed hsl(17, 100%, 50%);
      background-color: hsl(0, 0%, 5%);
      display: grid;
      place-items: center;
    }
    .hero-about {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
