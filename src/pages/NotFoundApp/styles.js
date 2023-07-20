import styled from 'styled-components';

export const Container = styled.main`
  
  grid-area: content; 

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2.5rem;

  font-family: 'Roboto', sans-serif;

  padding-top: 2.4rem;
  padding-bottom: 4.2rem;

  padding-inline: 3.4rem;

  @media only screen and (min-width: 425px) {
    padding-top: 6.5rem;
  }

/*   @media only screen and (max-width: 390px) and (min-width: 360px) {
    padding-inline: 0;
    padding-top: 0;
  } */


  > h1 {
    font-size: 3.4rem;
    color: ${({ theme }) => theme.price};
  }

  > svg {

    height: 15.7rem;
    width: 15.7rem;
  }

  > svg path {
    fill: ${({ theme }) => theme.footer_rights};
  }

  > button {
    height: 4.8rem;
  }
`;

export const Information = styled.div`
  text-align: center;

  > h2 {
    font-size: 2rem;
  }

  > p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.footer_rights};

    margin-top: 1.2rem;
  }
`;