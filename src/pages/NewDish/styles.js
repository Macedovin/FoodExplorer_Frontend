import styled from 'styled-components';

export const Container = styled.main`

  grid-area: content;

  overflow-x: visible;
  overflow-y: overlay;

  padding: 0 3.2rem;

  display: flex;
  flex-direction: column;

  gap: 3.5rem;

  > h1 {
    font-size: 3.2rem;
    font-weight: 500;
  }

  @media only screen and (min-width: 768px) {
    padding-inline: 12rem;

    .goBack {
      margin-top: 4rem;

      font-size: 2.4rem;
      font-weight: 700;

      > svg {
   
        margin-right: 1.1rem;

        height: 2.2rem; 
        width: 1.2rem;
      }
    }
  } 

  @media only screen and (min-width: 1024px) {
    padding-inline: 7rem;
  }

  @media only screen and (min-width: 1440px) {
    padding-inline: 12rem;
  }

  @media only screen and (min-width: 2560px) {
    padding-inline: 17rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2.4rem;

  margin-bottom: 4.2rem;

  .col-3 {
    display: flex;
    flex-direction: column;

    gap: 2.4rem;

    width: 100%;
  }

  .col-2 {
    display: flex;
    flex-direction: column;

    gap: 2.4rem;

    width: 100%;
  }

  > img {
    align-self: center;
    
    border-radius: 50%;

    width: 7.5rem;
    height: 7.5rem;

    margin-bottom: 1.6rem;

    @media only screen and (min-width: 768px) {     
      width: 9rem;
      height: 9rem;
    }
  }

  #dish_name,
  #dish_price {
    background-color: ${({ theme }) => theme.select_background};
  }

  .new_dish {

     label {
      font-size: 1.6rem;
      margin-bottom: 1.6rem;
    }
  }

  .select {
    border-radius: 0.5rem;

    .inner-select {
      border-radius: 0.5rem 0 0 0.5rem;
    }
  }

  > button {
    height: 4.8rem;
    font-weight: 400; 
  }

  @media only screen and (min-width: 1024px) {
    .col-3 {
      flex-direction: row;

      .category {
        max-width: 36.4rem;
      }
    }
   
    .col-2 {
      flex-direction: row;

      .price {
        width: 25rem;
      }
    }

    > button {
      width: 17.2rem;
      align-self: flex-end; 
    }
  }
`;

export const Picture = styled.div`

  display: flex;
  flex-direction: column;

  width: 100%;

  > p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.secondary_text};

    margin-bottom: 1.6rem;
  }

  > label {
    
    font-size: clamp(1.3rem, 0.5rem + 2.1vw, 1.6rem);
    font-weight: 500;

    cursor: pointer;

    display: flex;
    align-items: center;

    gap: 0.8rem;

    padding-block: 1.2rem;
    padding-inline: 3.2rem;

    background-color: ${({ theme }) => theme.select_background};

    border-radius: 0.8rem;

    input {
      display: none;
    }

    svg { 
      height: 2.4rem;
      width: 2.4rem;
    }

    @media only screen and (max-width: 390px) and (min-width: 320px) {
      padding-inline: 2.4rem;
      
      gap: 1rem;
    }

    @media only screen and (min-width: 1440px) {
      padding-inline: 4.2rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    max-width: fit-content;
  }
`;

export const IngredientsSection = styled.section`

  width: 100%;
  
  > h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary_text};
    
    margin-bottom: 1.6rem;
  }
  
  .display-ingredients {
    min-height: 4.8rem;
    
    border-radius: 0.8rem;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    column-gap: 1.6rem;
    row-gap: 0.8rem;

    padding: 1.2rem;

    background-color: ${({ theme }) => theme.select_background};

    .ingredients { 
      background-color: ${({ theme }) => theme.ingredient_add};
    }

    .only-new {
      width: 100%;

      div {
        margin: auto;
      }
    }
  }
`;