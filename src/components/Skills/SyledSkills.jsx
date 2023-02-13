import styled from 'styled-components';

export const StyledSkills = styled.section`
  border: 2px solid ${({ theme }) => theme.colors.bgPrimary};
  background-color: ${({ theme }) => theme.colors.bgSecundaryOpacity};
  border-radius: 0.5rem;
  width: 90%;
  backdrop-filter: blur(5);
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .skills {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .skill {
    width: 100%;
    padding: 0.5rem 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__name {
      font-weight: 600;
    }
    &__image {
      height: 1.75rem;
      max-width: 3.5rem;
    }
  }
  @media screen and (min-width: 688px) {
    .skill {
      width: 50%;
      padding: 0.5rem 5%;
    }
  }
  @media screen and (min-width: 768px) {
    .skill {
      &__name {
        font-weight: 600;
        font-size: 0.9rem;
      }
      &__image {
        height: 2.25rem;
        max-width: 4.5rem;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .skill {
      &__name {
        font-weight: 600;
        font-size: 1.1rem;
      }
      &__image {
        height: 2.75rem;
        /* max-width: 4.5rem; */
      }
    }
  }
`;
