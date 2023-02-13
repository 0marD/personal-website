import styled from 'styled-components';

export const StyledUpArrow = styled.a`
  width: 2rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  display: grid;
  place-items: center;
  position: fixed;
  right: 1rem;
  bottom: 3.5rem;
  z-index: 1;
  .icon {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 668px) {
    bottom: 1rem;
  }
`;
