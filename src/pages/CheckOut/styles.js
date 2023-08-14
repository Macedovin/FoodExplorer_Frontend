import styled from 'styled-components';

export const Container = styled.main`

  grid-area: content;

  overflow-x: visible;
  overflow-y: overlay;

  padding-inline: 2.4rem;

  .inner-container {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 921px) {
    .inner-container {
      flex-direction: row;
      justify-content: space-between;

      gap: 7.5rem;
    }
  }

  @media only screen and (min-width: 1024px) {
  padding-inline: 6rem;  
  }

  @media only screen and (min-width: 1440px) {    
  padding-inline: 12rem;
  }

  @media only screen and (min-width: 2560px) {
  padding-inline: 18rem;
  }
  `;

export const Order = styled.div`
  > h2 {
    font-size: 3.2rem;
    font-weight: 500;

    margin-block: 3.5rem;
  }

  .order-cards {
    display: flex;
    flex-direction: column;

    gap: 3.2rem;

    .price {
      display: none;
    }

    > footer {
      display: flex;
      flex-direction: column;

      gap: 4.7rem;
      
      > h3 {
        font-size: 2rem;
        font-weight: 500;

      }
  
      .finish {
        height: 4.8rem;
        max-width: fit-content;
  
        padding-inline: 4.5rem;
  
        align-self: flex-end;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .order-cards {
      
      .price {
        display: flex;
      }
    }
  }
  
  @media only screen and (max-width: 920px) and (min-width: 768px)  {
    
    .order-cards {
      display: flex;
      flex-flow: row wrap;
      
      column-gap: 4.8rem;

      > footer {
        flex-basis: 100%;
      
        .finish {
          margin-left: 5rem
        }
      }
    }
  }

  @media only screen and (min-width: 921px) {
    .order-cards {
      > button {
        height: 4.8rem;
      }
    }
  }

  @media only screen and (min-width: 2560px) {
    .order-cards {
      display: flex;
      flex-flow: row wrap;

      > footer {
        flex-basis: 100%;
      
        .finish {
          margin-left: 5rem
        }
      }
    }
  }
`;

export const Empty = styled.div`
  text-align: center;

  > h4 {
    font-size: 2rem;

    margin-bottom: 5rem;
    margin-inline: 1.9rem;
  }

  > svg { 
    height: 8rem;
    width: 8rem;

  }
  
  > svg path {
    fill: ${({ theme }) => theme.footer_logo};
  }
  > p {
    font-size: 1.6rem;
    font-weight: 700;

    color: ${({ theme }) => theme.footer_logo};

    margin-bottom: 1.5rem;
  }
`;

export const Payment = styled.div`
  margin-bottom: 10rem;

  > h1 { 
  font-size: 2.4rem;
  font-weight: 500;

  margin-block: 3.5rem;
  }
`;