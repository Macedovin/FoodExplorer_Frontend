import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: flex-start;

  gap: 0.9rem;
  
  > img {

    height: 6.4rem;
    width: 6.4rem;

    @media only screen and (width: 320px) {
      height: 4.4rem;
      width: 4.4rem;
    }
  
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end; 

    font-size: 1.4rem;

    line-height: 2.2rem;
    
    span {
        font-family: 'Roboto', sans-serif;

        color: ${({ theme }) => theme.primary_text}; 
      }
  
      strong {
      font-weight: 500;
      
      color: ${({ theme }) => theme.secondary_text};
    }
  }

`;