import styled from 'styled-components';

export const StyledCertificates = styled.section`
  border: 2px solid ${({ theme }) => theme.colors.bgPrimary};
  background-color: ${({ theme }) => theme.colors.bgSecundaryOpacity};
  border-radius: 0.5rem;
  width: 90%;
  backdrop-filter: blur(5px);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 2rem;
  overflow: hidden;
  aspect-ratio: 1/2;
  position: relative;
  &.expand {
    aspect-ratio: unset;
  }
  .certificates {
    display: flex;
    flex-wrap: wrap;
    row-gap: 2rem;
    border-radius: 0.5rem;
    justify-content: center;
    padding-bottom: 3.0625rem;
  }
  .see__btn {
    backdrop-filter: blur(3px);
    position: absolute;
    z-index: 1;
    bottom: 0;
    height: 3rem;
    display: grid;
    place-items: center;
    width: 100%;
    span {
      cursor: pointer;
      padding: 0.25rem 0.75rem;
      background-color: ${({ theme }) => theme.colors.bgSecundary};
      border: 2px solid ${({ theme }) => theme.colors.fontSecundary};
      color: ${({ theme }) => theme.colors.fontSecundary};
      transition: all 0.3s;
      &:hover {
        background-color: ${({ theme }) => theme.colors.fontSecundary};
        border: 1px solid ${({ theme }) => theme.colors.bgSecundary};
        color: ${({ theme }) => theme.colors.bgSecundary};
      }
    }
  }
  @media screen and (min-width: 668px) {
    aspect-ratio: 1/1;

    .certificates {
      justify-content: space-evenly;
      align-items: center;
    }
  }
  @media screen and (min-width: 1024px) {
    h3 {
      font-size: 1.1rem;
    }
  }
`;
