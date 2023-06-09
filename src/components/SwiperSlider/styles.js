import styled , { css } from 'styled-components';

export const SliderWrap = styled.div`
  position: relative;

  .swiper {
    width: 100%;
    display: flex;
  
    padding-block: 2.4rem;
  }

  .swiper-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
  }

  .swiper-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
  }
`;

import prato_teste from '../../assets/Prato_1.png'

export const Container = styled.div`

  height: 29.2rem;
  width: 21rem;

  position: relative;

  display: flex;
  flex-direction: column;
  flex-grow: 0;     
  flex-shrink: 0;
  align-items: center;

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
`;

export const TopCard = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  > button {
    > svg {
      height: 2.4rem;
      width: 2.4rem;
      
      > path {
        fill: ${({ theme }) => theme.primary_text};
        stroke: ${({ theme }) => theme.primary_text};
        stroke-width: 0.5;        
      }
    }

  }  
`;

export const Picture = styled.div`
  flex: 1;

  align-self: center;

  height: 8.8rem;
  width: 8.8rem;

  background: url(${prato_teste}) no-repeat center center;
  background-size: contain;

  transition: all 0.3s ease-out;
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

    color: ${({ theme }) => theme.primary_text};
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
  
  width: 100%;

  .quantity {
    display: flex;
    align-items: center;

    margin-bottom: 1.6rem;

    gap: 1.6rem;

    > span {
      font-family: 'Roboto', sans-serif;
    }

    > button {
      > svg path {
        fill: ${({ theme }) => theme.secondary_text};
      }
    }
  }
`;
