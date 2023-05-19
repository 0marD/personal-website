import styled from "styled-components";

export const StyledSkillsPreview = styled.section`
    padding: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media screen and (min-width: 768px) {
      border-top: 2px dashed hsl(17, 100%, 50%);
    border-bottom: 2px dashed hsl(17, 100%, 50%);
    background-color: hsl(0, 0%, 5%);
  
  }
`;
