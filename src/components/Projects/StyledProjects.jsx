import styled from 'styled-components';

export const StyledProjects = styled.section`
  border: 2px solid ${({ theme }) => theme.colors.bgPrimary};
  background-color: ${({ theme }) => theme.colors.bgSecundaryOpacity};
  border-radius: 0.5rem;
  width: 90%;
  backdrop-filter: blur(5);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 2rem;
  .card {
    width: 100%;
    aspect-ratio: 2/1.25;
    border: 2px solid ${({ theme }) => theme.colors.bgPrimary};
    border-radius: 0.5rem;
    position: relative;
  }
  .projects {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .imageContainer {
    border-radius: inherit;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    overflow: hidden;
    &__image {
      width: 100%;
      height: 100%;
      transition: transform 0.3s;
      transform: scale(1.2);
      object-fit: cover;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  .content {
    position: absolute;
    bottom: 0;
    height: 0;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.bgSecundary};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    border-radius: inherit;
    overflow: hidden;
    transition: height 0.3s;
    &__head {
      font-size: 0.9rem;
    }
    &__body,
    &__techs {
      font-size: 0.8rem;
    }
    &__link {
      border: 1px solid ${({ theme }) => theme.colors.bgPrimary};
      padding: 0 1rem;
      transition: all 0.3s;
      &:hover {
        background-color: ${({ theme }) => theme.colors.fontPrimary};
        border-color: ${({ theme }) => theme.colors.fontPrimary};
        color: ${({ theme }) => theme.colors.bgSecundary};
      }
    }
    &--active {
      padding: 0.5rem;
      transition: height 0.3s;
      height: 100%;
    }
  }
  .seeBtn {
    position: absolute;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.bgSecundary};
    color: ${({ theme }) => theme.colors.fontSecundary};
    border: 1px solid ${({ theme }) => theme.colors.fontSecundary};
    display: grid;
    place-items: center;
    border-radius: 1rem;
    height: 1.5625rem;
    top: calc(100% - 0.7656rem);
    right: 35%;
    left: 35%;
    transition: all 0.3s;
    z-index: 2;
    &:hover {
      background-color: ${({ theme }) => theme.colors.fontSecundary};
      color: ${({ theme }) => theme.colors.bgSecundary};
      border: 1px solid ${({ theme }) => theme.colors.bgSecundary};
    }
  }
  @media screen and (min-width: 668px) {
    .projects {
      justify-content: center;
    }
    .card {
      width: 45%;
      aspect-ratio: 2/1.35;
    }
    .content__head {
      font-size: 0.75rem;
    }
    .content__body,
    .content__techs,
    .content__link {
      font-size: 0.65rem;
    }
  }
  @media screen and (min-width: 768px) {
    .content__head {
      font-size: 0.9rem;
    }
    .content__body,
    .content__techs,
    .content__link {
      font-size: 0.78rem;
    }
  }
  @media screen and (min-width: 1024px) {
    h3 {
      font-size: 1.1rem;
    }

    .content__head {
      font-size: 1rem;
    }
    .content__body,
    .content__techs,
    .content__link {
      font-size: 1rem;
    }
  }
`;
