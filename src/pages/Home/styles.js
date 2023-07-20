import styled from 'styled-components';

import { Link } from 'react-router-dom';

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

  overflow-x: hidden;
  overflow-y: overlay;

  //padding: 0 2.4rem;

  > div:nth-child(1){
    width: 94vw;

    position: relative;
    left: calc(-49vw + 50%);
  }

  `;

export const FirstContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  gap: 2.5rem;

  height: 100%;

  padding-inline: 3.4rem;

  color: ${({ theme }) => theme.primary_color};
  `;  

export const Action = styled.div`
  > p {
    color: ${({ theme }) => theme.secondary_text};
    
    margin-top: 1.5rem;
  }
  
  > button {
    margin-top: 3.5rem;
    
    height: 4.8rem;
  }
`;