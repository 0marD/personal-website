import styled from "styled-components";

export const StyledContactMessage = styled.div`
    position: fixed;
  inset: 0 0 0 0;
  display: grid;
  place-items: center;
  background-color: hsla(0, 100%, 0%, 0.75);
  z-index: 1;
  backdrop-filter: blur(2px);

  .content {
    max-width: 90%;
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    background-color: hsl(0, 0%, 20%);
    font-size: 1.25rem;
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
  }

  .text {
    text-align: center;
  }

  .button {
    background-color: hsl(0, 0%, 0%);
    width: max-content;
    margin: 0 auto;
    font-size: 1.2rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: hsl(17, 100%, 40%);
      cursor: pointer;
    }

    &:active {
      transform: scale(0.8);
    }
  }
`;
