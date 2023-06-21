import styled from 'styled-components';

//import macaroonsImg from '../../assets/macarrons_full.png';

export const Container = styled.main`
/*   width: 100%;
  min-height: 100%;

  display: grid;
  grid-template-rows: 11.4rem 1fr 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer'; */

  /* grid-area: content; */

  grid-area: content; 

  overflow-x: visible;
  overflow-y: overlay;

  padding: 0 2.4rem;

  > div:nth-child(1){
    width: 94vw;

    position: relative;
    left: calc(-49vw + 50%);
  }

  `;

