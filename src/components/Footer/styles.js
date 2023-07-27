import styled from 'styled-components';

export const Container = styled.footer`
  grid-area: footer;

  height: 7.7rem;
  width: 100%;

  padding-block: 2.9rem; 
  padding-inline: clamp(1.4rem, 4.4vw, 2.8rem);
 
  display: flex;
  align-items: center;
  justify-content: space-between;

  //gap: 0.8rem;

  background-color: ${({ theme }) => theme.header_background};

  font-family: 'Roboto', sans-serif;

  > p {

    text-align: right;

    font-size: 1.2rem;
    color: ${({ theme }) => theme.footer_rights};
  }

  @media only screen and (width: 320px) {
    height: 5.7rem;

    padding-block: 2.9rem; 
  }

  @media only screen and (min-width: 1440px) {
    padding-inline: 6.9rem;
  }

  @media only screen and (min-width: 1440px) {
    padding-inline: 11.9rem;
  }
`;

export const Brand = styled.div`
  width: 14.2rem;
  
  display: flex;

  align-items: center;
  
  gap: 0.65rem;

  > svg {
    height: 2rem;
    width: 2.2rem;
  }  

  > svg path {
    
    fill: ${({ theme }) => theme.footer_logo};
  }  

  > h1 {
    
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.footer_logo};
  }
`;