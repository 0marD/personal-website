import styled from 'styled-components';

export const StyledFooter = styled.footer`
  min-height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.bgSecundaryOpacity};
  border-top: 2px solid ${({ theme }) => theme.colors.bgPrimary};
  p {
    font-size: inherit;
  }
  .socialLinks {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: max-content;
    .socialLink {
      .icon {
        font-size: 1.75rem;
      }
      &:hover {
        transform: scale(1.1) translate(0, 0);
      }
      &:active {
        transform: scale(0.9) translate(0, 0);
      }
    }
  }
`;
