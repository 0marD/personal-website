import styled from 'styled-components';

export const StyledNavDesk = styled.nav`
  width: max-content;
  display: none;
  gap: 0.5rem;
  list-style: none;
  height: 100%;
  li {
    padding: 0 0.5rem;
    height: 100%;
    display: grid;
    place-items: center;
    position: relative;
    a {
      font-size: 0.9rem;
    }
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      right: 50%;
      bottom: 0;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.bgPrimary};
    }
    &.selected {
      font-weight: 600;
      &:after {
        left: 0;
        right: 0;
        transition: all 0.3s;
      }
    }
    &:last-child a {
      border: 3px solid ${({ theme }) => theme.colors.fontPrimary};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.bgSecundary};
      background-color: ${({ theme }) => theme.colors.fontPrimary};
      padding: 0 0.5rem;
      border-radius: 2rem;
      transition: all 0.3s;
      &:hover {
        border: 3px solid ${({ theme }) => theme.colors.fontSecundary};
        color: ${({ theme }) => theme.colors.fontSecundary};
        background-color: ${({ theme }) => theme.colors.bgSecundary};
      }
    }
  }
  @media screen and (min-width: 668px) {
    display: flex;
  }
`;
