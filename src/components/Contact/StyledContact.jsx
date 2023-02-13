import styled from 'styled-components';

export const StyledContact = styled.section`
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
  .form {
    width: 90%;
    display: grid;
    place-items: center;
    gap: 1rem;
    &__container {
      width: 100%;
      position: relative;
    }
    &__left,
    &__right {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    label,
    input,
    textarea {
      outline: none;
      border: none;
      width: 100%;
      &:focus {
        outline: none;
        border: none;
      }
    }
    label {
      font-size: 0.8rem;
    }
    .bar {
      transition: all 0.3s;
      background-color: ${({ theme }) => theme.colors.fontSecundary};
      height: 3px;
      bottom: 0;
      z-index: 1;
      position: absolute;
      left: 50%;
      right: 50%;
    }
    input {
      min-height: 2rem;
      padding: 0.25rem 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.fontSecundary};
      font-size: 0.9rem;

      &:focus ~ .bar {
        transition: all 0.3s;
        left: 0;
        right: 0;
      }
    }

    .textAreaWrapper {
      width: 100%;
      height: max-content;
      position: relative;
      border-radius: 0.5rem;
      overflow: hidden;
      .barTextarea {
        transition: all 0.3s;
        background-color: ${({ theme }) => theme.colors.fontSecundary};
        height: 3px;
        bottom: 0;
        z-index: 1;
        position: absolute;
        left: 50%;
        right: 50%;
      }
      textarea {
        resize: none;
        display: block;
        background-color: ${({ theme }) => theme.colors.bgSecundary};
        min-height: 6rem;
        border: 1px solid ${({ theme }) => theme.colors.bgSecundaryOpacity};
        padding: 0.5rem;
        border-radius: 0.5rem;
        overflow: hidden;
        &::placeholder {
          color: ${({ theme }) => theme.colors.fontSecundary};
        }
        &:focus {
          border: 1px solid ${({ theme }) => theme.colors.fontSecundary};
        }
        &:focus ~ .barTextarea {
          transition: all 0.3s;
          left: 0;
          right: 0;
        }
        @media screen and (min-width: 668px) {
          min-height: 8rem;
        }
      }
    }
    &__btn {
      cursor: pointer;
      transition: all 0.3s;
      width: 6.25rem;
      height: 2rem;
      background-color: ${({ theme }) => theme.colors.bgSecundary};
      border: 2px solid ${({ theme }) => theme.colors.fontSecundary};
      font-weight: 500;
      font-size: 0.85rem;
      &:hover {
        background-color: ${({ theme }) => theme.colors.fontSecundary};
        /* border: 2px solid ${({ theme }) => theme.colors.bgSecundary}; */
        color: ${({ theme }) => theme.colors.bgSecundary};
      }
    }
    .msg-error {
      color: hsl(0, 100%, 60%);
    }
  }
  @media screen and (min-width: 668px) {
    .form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      textarea {
        min-height: 8rem;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    h3 {
      font-size: 1.1rem;
    }
    .form {
      label {
        font-size: 0.8rem;
      }
      input,
      textarea {
        font-size: 1rem;
      }
      .form__btn {
        font-size: 0.9rem;
      }
    }
  }
`;
