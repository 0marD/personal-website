import styled from 'styled-components';

export const StyledCardCertificates = styled.div`
  border-radius: 1rem;
  width: 90%;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.bgPrimary};
  .imageContainer {
    aspect-ratio: 1/0.65;
    overflow: hidden;
    border-radius: inherit;
    .certificateImage {
      object-fit: cover;
      object-position: center;
    }
  }
  .content__title {
    position: absolute;
    right: 10%;
    left: 10%;
    top: calc(100% - (2.75rem / 2));
    background-color: ${({ theme }) => theme.colors.bgSecundary};
    border: 1px solid ${({ theme }) => theme.colors.fontPrimary};
    color: ${({ theme }) => theme.colors.fontPrimary};
    min-height: 2.75rem;
    display: grid;
    place-items: center;
    text-align: center;
    border-radius: 0.25rem 0.5rem 0.25rem 0.5rem;
  }
  @media screen and (min-width: 668px) {
    width: 45%;
  }
  @media screen and (min-width: 1024px) {
    .content__title {
      font-size: 1rem;
      height: max-content;
    }
  }
`;
