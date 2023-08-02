import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;
  
  width: 100%;
  
  background-color: ${({ theme }) => theme.header_background}; // DARK_DARK_700
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 5.8rem 2.4rem 2.8rem 3.8rem;

  .larger-search {
    margin-top: 0;
    width: clamp(31rem, 18rem + 21vw, 67rem);
  }

  .order-bdg {
    display: flex;
  }

  .order-btn {
    height: 5.6rem;
    gap: 0.8rem;
    width: clamp(12rem, 2rem + 14vw, 21.6rem);
  }

  .new_dish-btn {
    display: none;
  }
  
  .leave-btn {

> svg {
  transform: rotate(90deg);
}
}
  .leave-btn,
  .favorite-bdg,
  .my-history-bdg,
  .all-users-bdg,
  .all-orders-bdg {
    > svg path {
      fill: ${({ theme }) => theme.primary_text}; 
    }
  }

  .larger-search, 
  .order-btn,
  .leave-btn,
  .favorite-bdg,
  .favorite-btn,
  .my-history-bdg,
  .my-history-btn,
  .all-users-bdg,
  .all-users-btn,
  .all-orders-bdg,
  .all-orders-btn {
    display: none;
  }  

  @media only screen and (width: 320px) {
    padding: 1.8rem 2.4rem 1.8rem 3.8rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 2.4rem 2.4rem;
  
    gap: 2.4rem;
  
    .larger-search,
    .favorite-bdg,
    .my-history-bdg,
    .all-users-bdg,
    .all-orders-bdg {
      display: flex;
    }
    
    .new_dish-btn {
      display: block;
      
      height: 5.2rem;
      width: clamp(10rem, 2rem + 10vw, 15.6rem);
    }

    .leave-btn{
      display: block;
    }

    .order-btn {
      display: none;
    }
  }

  @media only screen and (min-width: 1024px) {

    .order-btn,
    .all-users-btn,
    .all-orders-btn {
      display: flex;
    }
    
    .order-bdg, 
    .all-users-bdg,
    .all-orders-bdg {
      display: none;
    }
  }

  @media only screen and (max-width: 1439px) and (min-width: 1024px) {
    padding: 2.4rem 5rem; 

    .larger-search {
      padding-left: 1.5rem;
    } 
    
  }

  @media only screen and (min-width: 1440px) {
    padding: 2.8rem 12rem; 
    
    .larger-search {
      padding-left: 6.8rem;
    }

    .favorite-btn,
    .my-history-btn {
      display: flex;
    }

    .my-history-bdg,
    .favorite-bdg {
      display: none;
    }
  }

  @media only screen and (min-width: 1800px) {
    padding: .8rem 17rem; 
    
    .larger-search {
      padding-left: 9.8rem;
    }
  }
`; 

export const Brand = styled(Link)`
  display: flex;
  align-items: center;

  gap: 0.8rem;
  
  > svg {
    height: 2.5rem;
    width: 2.5rem;
  }

  @media only screen and (min-width: 768px) {
    > svg {
    height: 3rem;
    width: 3rem;
  }
  }
`;

export const LogoText = styled.div`
  display: flex;
  align-items: center;
  
  gap: 0.8rem;
  
  font-family: 'Roboto', sans-serif;

  width: fit-content;
  
  > h1{
    font-size: 2rem;
    font-weight: 700;
    
    line-height: 2.5rem;

    color: ${({ theme }) => theme.secondary_text}
  }

  > p { 
    font-size: 1.2rem;
    color: ${({ theme }) => theme.price};
  }

  @media only screen and (min-width: 768px) {

    flex-direction: column;

    > p { 
      align-self: center;
    }
  }

  @media only screen and (min-width: 1025px) {

  > p { 
    align-self: flex-end;
  }
}
`;

/*  ------------------ ORDER BADGE ------------------   */

export const BadgeContainer = styled(Link)`
  position: relative;

  display: flex;
  align-items: center;

  > svg path {
    fill: ${({ theme }) => theme.primary_text};
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -1rem;
  right: -1rem;

  background-color: ${({ theme }) => theme.buttons_background};

  height: 2rem;
  width: 2rem;

  border-radius: 9999px;
`;

export const BadgeText = styled.span`

  font-weight: 500;

  color: ${({ theme }) => theme.secondary_text};
`;

/*  ------------------ ORDER BADGE ------------------   */