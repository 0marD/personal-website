import styled from "styled-components";

export const StyledProjectModal = styled.div`
  &.project-modal {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 100%;
    bottom: -100%;
    background-color: hsl(0, 0%, 100%);
    transition: left 0.3s;

    &.active {
      transition: left 0.3s;
      left: 0;
      padding-top: 3.5rem;
    }
  }

  .project-modal__container {
    display: flex;
    flex-direction: column;
  }
  
  .project-modal__image {
    display: block;
    width: 100%;
    aspect-ratio: 1.5/1;
    object-fit: cover;
    object-position: top;
    margin: auto;
    margin-bottom: -1rem;
  }
  
  .project-modal__content {
    background-color: white;
    color: black;
    position: relative;
    display: grid;
    place-items: center;
    box-shadow: 0px -4px 10px -5px rgba(0, 0, 0, 0.5);
    padding: 1rem;
    padding-top: 2.5rem;
    text-align: center;
    gap: 1rem;
    border-radius: 1.5rem 1.5rem 0 0;
  }
  
  .project-modal__close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.75rem;
    transition: transform 0.3s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;
