import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  label {
    display: block;
    width: max-content;
  }
  
  input,textarea,button {
    display: block;
    width: 100%;
    outline: none;
      border: none;
      color: inherit;
      font-size: inherit;
      font-family: inherit;
      &::placeholder{   
      font-size: inherit;
      font-family: inherit;}
    &:focus {
      outline: none;
      border: none;
    }
  }

  a {
    width: max-content;
    color: inherit;
    text-decoration: none;
  }
html{
  /* display: grid; */
    /* place-items: center; */

}
  body {
    position: relative;
    scroll-behavior: smooth;
    font-family: 'Nunito', sans-serif;
    display: grid;
    place-items: center;
    background-color: hsl(0, 0%, 0%);
    max-width: 1440px;
  }
  
  #root {
    font-size: 16px;
    display: grid;
    place-items: center;
    background-color: hsl(0, 0%, 0%);
    width: 100%;
    min-height: 100vh;
    color: white;
    position: relative;
    @media screen and (min-width: 768px) {
     font-size: 18px;
    }
  }

  .separator {
    margin-bottom: 5rem;
    background-color: transparent;
    color: transparent;
    border: transparent;
  }
`;

export { GlobalStyle };
