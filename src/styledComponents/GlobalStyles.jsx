import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{
@media screen and (min-width: 1200px) {
    font-size: 17px;
}
}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    background-color: transparent;
    text-decoration: none;
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    font-family: Poppins;
    position: relative;
    background: ${({ theme }) => theme.colors.bgSecundary};
    color: ${({ theme }) => theme.colors.fontPrimary};
    overflow-x: hidden;
    font-size: 1rem;
    /* max-width: 375px; */
    box-shadow: 0 0 10px black;
  }
h1,h2,h3,h4,h5{
    color: ${({ theme }) => theme.colors.fontSecundary};
}

h1{
  font-size: 1.5rem;
}
h2{
  font-size: 1.2rem;font-weight:700;
  
}h3{
  font-size: 1rem;font-weight:600;
}
h4,h5{
  font-size: .8rem;
  font-weight: 500;
}
hr{
  margin-bottom: 3.1rem;
  background-color: transparent;
  border-color: transparent;
}
p,div,span{
  font-size: .8rem;
}
  img{
    display: block;
    max-width: 100%;
  }
  /* .separation{
    margin-bottom: 3.75rem;
    border: none;
    background-color: transparent;
    @media screen and (min-width: 760px) {
    margin-bottom: 5rem;
  }
  } */
`;
