import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  max-width: 32.7rem;

  gap: 1.3rem;

  > img {
    height: 7.2rem;
    width: 7.2rem;
  }

  > svg { 
    height: 3.5rem; 
    min-width: 3.5rem;

    padding-left: 1.5rem;
  }

  > svg path {
    stroke: ${({ theme }) => theme.primary_text};
    fill: ${({ theme }) => theme.primary_text};
  }

  @media only screen and (min-width: 768px) {
    width: 32.7rem;
  }
`;

export const FoodInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  font-family: 'Poppins', sans-serif;
  font-size: 2rem;

  .data {
    display: flex;

    gap: 0.8rem;

    .amount {
      min-width: fit-content;
    }

    .price {
      align-self: center;

      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.serach_background};
    }
  }
`;  

export const Remove = styled.div`
  .exclude {
    font-family: 'Roboto', sans-serif;

    font-size: 1.2rem;
    color: ${({ theme }) => theme.buttons_disabled};
  }
`;