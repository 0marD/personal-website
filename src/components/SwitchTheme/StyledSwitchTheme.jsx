import styled from 'styled-components';

export const StyledSwitchTheme = styled.div`
  &.switchMobile {
    height: 1.5rem;
    aspect-ratio: 2.5/1;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    border-radius: 2rem;
    display: flex;
    position: relative;
    margin-top: 2rem;

    .selector {
      cursor: pointer;
      aspect-ratio: 1/1;
      height: 2rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.bgSecundary};
      color: ${({ theme }) => theme.colors.fontSecundary};
      border: 1px solid ${({ theme }) => theme.colors.fontSecundary};
      position: absolute;
      top: -0.25rem;
      left: -0.25rem;
      transition: all 0.3s;
      display: grid;
      place-items: center;
      .icon {
        width: 70%;
        height: auto;
        display: none;
        &--active {
          display: block;
        }
      }
      &.dark {
        transition: right 0.3s;
        position: absolute;
        top: -0.25rem;
        right: -0.25rem;
        left: unset;
      }
    }
  }

  &.switchDesk {
    background-color: ${({ theme }) => theme.colors.bgSecundary};
    border-radius: 50%;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 1;
    height: 2rem;
    aspect-ratio: 1/1;
    display: none;
    place-items: center;
    border: 1px solid ${({ theme }) => theme.colors.fontSecundary};
    .selector {
      width: 70%;
      height: 70%;
      position: relative;
    }
    .icon {
      position: absolute;
      left: 0;
      width: 0;
      height: 100%;
      transition: width 0.3s;
      &--active {
        right: 0;
        left: unset;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
    }
    @media screen and (min-width: 668px) {
      display: grid;
    }
  }
`;
