import styled from 'styled-components';

export const Container = styled.main`
  
  grid-area: content;

  overflow-x: visible;
  overflow-y: overlay;

  padding-inline: 2.4rem;
  padding-bottom: 10rem;

  > h1 {
    font-size: 3.2rem;
    font-weight: 500;

    margin-block: 3.5rem;
  }

  .fav-cards {
    display: flex;
    flex-direction: column;

    gap: 3.2rem;
  }

  @media only screen and (min-width: 768px) {

    .fav-cards {
      display: flex;
      flex-flow: row wrap;

      column-gap: 4.8rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    padding-inline: 6rem;
    
    .fav-cards {
      column-gap: 12.8rem;
    }
  }

  @media only screen and (min-width: 1440px) {
    padding-inline: 10rem;
  }

  @media only screen and (min-width: 2560px) {
    padding-inline: 18rem;
  }
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2.5rem;

  > h2 {
    text-align: center;

    margin-inline: 2.8rem;
    margin-top: 3.5rem;
  }

  @media only screen and (min-width: 375px) {
    > h2 {
      margin-top: 5.5rem;
    }
  }

  @media only screen and (min-width: 414px) {
    > h2 {
      font-size: 2.4rem;

      margin-top: 7.5rem;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-inline: 5rem;
    
    > h2 {
      font-size: 3.2rem;

      margin-top: 12.5rem;
    }
  }
`;