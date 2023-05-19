import styled from "styled-components";

export const StyledSpinner = styled.div`
  position: fixed;
  background-color: hsl(0, 0%, 0%, 0.75);
  inset: 0 0 100% 0;
  display: grid;
  place-items: center;
  overflow: hidden;

  .spinner {
    position: relative;
    width: 10%;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  .spinner::before,
  .spinner:after {
    content: "";
    position: absolute;
    border-radius: inherit;
  }

  .spinner:before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      0deg,
      hsl(17, 100%, 50%) 0%,
      hsl(17, 100%, 20%) 100%
    );
    animation: spin8932 0.5s infinite linear;
  }

  .spinner:after {
    width: 85%;
    height: 85%;
    background-color: hsl(0, 0%, 0%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes spin8932 {
    to {
      transform: rotate(360deg);
    }
  }

  &.active {
    inset: 0;
  }
`;
