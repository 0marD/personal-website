import styled from 'styled-components';

export const StyledLogo = styled.div`
  width: 6.25rem;
  color: black;
  /* background-color: ${({ theme }) => theme.colors.bgSecundary}; */

  .top,
  .bottom {
    display: flex;
    font-size: 0.85rem;
    width: 100%;
  }
  .top div {
    width: 50%;
    display: grid;
    place-content: center;
    font-weight: 500;
    font-size: 0.85rem;
  }
  .top__name {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
  .top__lastName {
    color: white;
    background-color: black;
    border: 1px solid black;
  }
  .bottom {
    display: flex;
    &__occupation {
      text-align: center;
      width: max-content;
      font-size: 0.6rem;
      margin: auto;
      padding: 0.15rem 0;
      line-height: 0.85;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 7.75rem;

    .top div {
      font-size: 1.2rem;
    }

    .bottom {
      &__occupation {
        font-size: 0.775rem;
        line-height: 0.85;
      }
    }
  }
`;
