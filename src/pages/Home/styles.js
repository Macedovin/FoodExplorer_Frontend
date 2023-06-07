import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  min-height: 100%;

  display: grid;
  grid-template-rows: 11.4rem 1fr 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  > main {
    overflow-x: visible;
    overflow-y: overlay;

    padding: 0 2.4rem;
  }

`;