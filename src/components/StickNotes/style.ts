import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width : 100%

  .reminderTitle {
    display: flex:

    align-items: center;
    justify-content: center;  
    
    width : 100%;

    margin: 2rem 0;
    
    >h1 {
    color: var(--purple-600);
    font-family: "Inter";
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-column: repeat(4, 1fr);
  grid-row-gap: 1.5rem;
  grid-column-gap: 2, 5rem;

  width: 90%;

  margin-button: 5rem;
`;
