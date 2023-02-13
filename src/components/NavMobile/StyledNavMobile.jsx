import styled from 'styled-components';

export const StyledNavMobile = styled.nav`
  position: fixed;
  z-index: 10;
  top: 3rem;
  bottom: 0;
  left: 100%;
  right: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bgSecundaryOpacity};
  display: flex;
  backdrop-filter: blur(2px);
  transition: left 0.3s;
  display: flex;
  &.isActive {
    transition: left 0.3s;
    left: 0;
  }
  .bgInner {
    background-color: ${({ theme }) => theme.colors.bgSecundary};
    margin: auto;
    padding-top: 1rem;
    margin-right: 0;
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    list-style: none;
    li a {
      font-size: 1rem;
    }
    li {
      display: grid;
      place-items: center;
      min-height: 2.5rem;
      width: 100%;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        bottom: 50%;
        width: 4px;
        background-color: ${({ theme }) => theme.colors.bgPrimary};
      }
      &.selected {
        font-weight: 600;
        &:after {
          top: 0;
          bottom: 0;
          transition: all 0.3s;
        }
      }
    }
  }
`;
