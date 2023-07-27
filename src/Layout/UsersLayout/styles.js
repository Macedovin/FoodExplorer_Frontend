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

  @media only screen and (min-width: 768px) {
    min-width: 100vw;
  }  
`;
