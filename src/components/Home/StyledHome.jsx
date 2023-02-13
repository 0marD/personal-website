import styled from 'styled-components';

export const StyledHome = styled.section`
  background-color: ${({ theme }) => theme.colors.bgSecundaryOpacity};
  border-radius: 0.5rem;
  width: 90%;
  backdrop-filter: blur(5);
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.bgPrimary};
  .right {
    text-align: center;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 0.85rem;
    }
    p {
      margin-top: 0.75rem;
    }
  }
  .left {
    display: grid;
    place-items: center;
  }
  @media screen and (min-width: 688px) {
    display: grid;
    grid-template-columns: 40% 60%;
    padding: 1.5rem 1rem;
  }
  @media screen and (min-width: 768px) {
    .right {
      h3 {
        font-size: 0.95rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .right {
      h2 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;
