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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2.4rem;

  margin-bottom: 4.2rem;

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
`;

export const Picture = styled.div`

  display: flex;
  flex-direction: column;

  width: 100%;

  > img {
    align-self: center;
    
    border-radius: 50%;

    width: 7.5rem;
    height: 7.5rem;

    margin-bottom: 1.6rem;
  }

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
    padding-left: 3.2rem;

    @media only screen and (max-width: 390px) and (min-width: 320px) {
      padding-inline: 2.4rem;
    }

    background-color: ${({ theme }) => theme.select_background};

    border-radius: 0.8rem;

    @media only screen and (max-width: 390px) and (min-width: 320px) {
      gap: 1rem;
    }

    input {
      display: none;
    }

    svg { 
      height: 2.4rem;
      width: 2.4rem;
    }
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

export const ActionButtons = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1.2rem;

  > button {
    height: 4.8rem;
    font-weight: 400; 
  }

  .delete {
    background-color: ${({ theme }) => theme.select_background};
  }
`;