import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  //height: 11.4rem;

  background-color: ${({ theme }) => theme.header_background}; // DARK_DARK_700
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 5.8rem 2.4rem 2.8rem 3.8rem;

`; 

export const Brand = styled(Link)`
  display: flex;
  align-items: center;

  gap: 0.8rem;
  
  > svg {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const LogoText = styled.div`
  display: flex;
  align-items: center;
  
  //flex-direction: column;
  
  gap: 0.8rem;
  
  font-family: 'Roboto', sans-serif;
  
  > h1{
    font-size: 2.12rem;
    font-weight: 700;
    
    line-height: 2.5rem;

    color: ${({ theme }) => theme.secondary_text}
  }
  
  > span {
    //align-self: center;

    color: ${({ theme }) => theme.price};
    font-size: 1.2rem;
  }
`;