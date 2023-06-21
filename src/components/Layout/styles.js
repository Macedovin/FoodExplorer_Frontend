import styled from 'styled-components';

export const Container = styled.div`
  max-width: clamp(33rem, 31rem + 52vw, 75rem);

  height: 100vh;

  display: grid;
  grid-template-rows: min-content auto min-content;
  grid-template-areas:
    'header'
    'content'
    'footer';
`;
/*   
  > main {

    grid-area: content;
    
    overflow-x: visible;
    overflow-y: overlay;

    padding: 0 2.4rem; 

  } 

`;*/