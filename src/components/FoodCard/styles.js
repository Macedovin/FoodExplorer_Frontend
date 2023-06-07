import styled, { ThemeConsumer } from 'styled-components';

import prato_teste from '../../assets/Prato_1.png'

export const Container = styled.div`

  height: 29.2rem;
  width: 21rem;

  position: relative;

  display: flex;
  flex-direction: column;
  flex-grow: 0;     
  flex-shrink: 0;

  gap: 1.2rem;

  background-color: ${({ theme }) => theme.card_background};

  padding: 2.4rem;

  color: ${({ theme }) => theme.primary_text};
  
  font-size: 1.6rem;

  border: 1px solid red; // ${({ theme }) => theme.card_boarder}
  border-radius: 0.8rem;
`;

export const TopCard = styled.div`

  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  > svg {
    height: 2.4rem;
    width: 2.4rem;
  }
`;

export const Picture = styled.div`
  flex: 1;

  min-height: 8.8rem;
  min-width: 8.8rem;

  background: url(${prato_teste}) no-repeat center center;
  background-size: contain;
`;

export const FoodInfos = styled.div`
  font-family: 'Roboto', sans-serif;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.2rem;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
  }

  > p {
    font-size: 1.4rem;

    color: ${({ theme }) => theme.description};

    text-align: center;
    text-align-last: center;

    display: none; // !!!! MUDAR NO DESKTOP !!!!!
  }

  > h3 {
    
    font-weight: 400;

    color: ${({ theme }) => theme.price};
  }
`;

export const OrderInfos = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  .quantity {
    display: flex;
    align-items: center;

    margin-bottom: 1.6rem;

    gap: 1.6rem;
  }

  > span {
    margin: 1.4rem;
  }

  > svg {
    height: 2.4rem;
    width: 2.4rem;
  }
`;