import styled from 'styled-components';

export const StyledMenuHam = styled.div`
  width: 2rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  color: ${({ theme }) => theme.colors.fontSecundary};
  .icon {
    width: 0;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: all 0.3s;
    left: 0;

    &--active {
      opacity: 1;
      transition: all 0.3s;
      width: 100%;
      right: 0;
      &:hover {
        color: ${({ theme }) => theme.colors.fontPrimary};
      }
    }
  }
  @media screen and (min-width: 668px) {
    display: none;
  }
`;
