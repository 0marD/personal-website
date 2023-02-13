import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 3rem;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bgSecundaryOpacity};
  overflow: hidden;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;
