import styled from 'styled-components';

export const Container = styled.main`

  grid-area: content;

  overflow-x: visible;
  overflow-y: overlay;

  padding: 0 2.4rem;
  
  > h1 {
    font-size: 2.4rem;
    font-weight: 500;

    margin-block: 3.5rem;
  }
`;