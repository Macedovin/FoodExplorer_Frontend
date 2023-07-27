import styled from 'styled-components';

export const Container = styled.div`

  height: 29.2rem;
  width: 21rem;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.2rem;

  background-color: ${({ theme }) => theme.card_background};

  padding: 2.4rem;

  color: ${({ theme }) => theme.primary_text};
  
  font-size: 1.6rem;

  border: 1px solid red; // ${({ theme }) => theme.card_boarder}
  border-radius: 0.8rem;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: none;

    .cardPicture {
      transform: translateY(-0.5rem); 

      transition: all 0.3s ease-in-out;
    }
  }

  @media only screen and (min-width: 768px) {
    height: 46.2rem;
    width: 30.4rem;

    gap: 1.5rem;
  }
`;

export const TopCard = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  > button {
    svg {
      height: 2.4rem;
      width: 2.4rem;
      
      
      path {
        fill: ${({ theme }) => theme.primary_text};
        stroke: ${({ theme }) => theme.primary_text};
        stroke-width: 0.5;        
      }
    }
    
    .edit path {
      fill: none;
      stroke: ${({ theme }) => theme.primary_text};
      stroke-width: 1.5; 
    }
  }  
`;

export const Picture = styled.div`

  height: 8.8rem;
  width: 8.8rem;
  
  transition: all 0.3s ease-out;
  
  > img {
    align-self: center;
    
    height: 8.8rem;
    width: 8.8rem;

    border-radius: 50%;
  }

  @media only screen and (min-width: 768px) {

    height: 17.6rem;
    width: 17.6rem;

    > img {
      min-height: 17.6rem;
      width: 17.6rem;
    }
  }
`;

export const FoodInfos = styled.div`
  font-family: 'Roboto', sans-serif;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.2rem;

  > h2 {
    text-align: center;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;

    color: ${({ theme }) => theme.primary_text};
  }

  > h3 {
    font-size: 1.6rem;
    font-weight: 400;

    color: ${({ theme }) => theme.price};
  }

  > p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;

    color: ${({ theme }) => theme.description};

    text-align: center;
    text-align-last: center;

    display: none;
  }

  @media only screen and (min-width: 768px) {
    gap: 1.5rem;

    > h2 {
      font-size: 2.4rem;
      font-weight: 700;
    }

    > h3 {
      font-size: 3.2rem;
    }

    > p {
      display: block;
    }
  }

`;

export const FoodIngredients = styled.div`

  display: none; // CHANGE WHEN NEEDED
`;

export const OrderInfos = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  
  width: 100%;

  gap: 1.6rem;

  .quantity {
    display: flex;
    align-items: center;

    gap: 1.4rem;

    > span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
    }

    > button {
      
      > svg path {
        fill: ${({ theme }) => theme.secondary_text};
      }
    }
  }
  
  .include {
    transition: all 0.3s ease;
    
    &:hover {

      background-color: ${({ theme }) => theme.buttons_hover};
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;

    .quantity {
      display: flex;
      align-items: center;

      gap: 1.6rem;

      > span {
        font-family: 'Roboto', sans-serif;
        font-size: 2rem;
      }
    }

    .include {
      height: 4.8rem;
    }
  }
`;
