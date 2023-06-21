import styled from 'styled-components';

import prato_teste from '../../assets/Prato_1.png'

export const Container = styled.main`
  grid-area: content; 
  
  overflow-x: visible;
  overflow-y: overlay;

  height: max-content;

  padding-inline: clamp(3.2rem, 3.5rem + 6vw, 5.6rem);

  padding-top: 3.7rem;
  padding-bottom: 5.4rem;

  > a:nth-child(1) {
    font-size: 2.4rem;
    font-weight: 500;

    text-align: left;

    color: ${({ theme }) => theme.primary_text};

    display: flex;
    align-items: center;

    svg {     
      margin-right: 1.1rem;
    }

    svg path {
      fill: ${({ theme }) => theme.primary_text};
    }
  }

  .foodInfos {
    height: 100%;
    width: 100%;

    border: none;
    background-color: transparent;

    padding: 0;
    gap: 0;
  
    margin-top: 1.6rem;

    &:hover {
      transform: scale(1);
    }

    .heart {
      display: none;
    }

    .cardPicture {
      display: block;
      
      min-height: 26.4rem;
      width:  26.4rem;

      &:hover {
        transform: translateY(0);
      }
    }

    .dishData {
      color: ${({ theme }) => theme.primary_text};

      gap: 0;

      > h2 {
        font-size: 2.7rem;
        font-weight: 500;

        margin-top: 1.6rem;
      }

      > p {
        display: block;

        font-family: 'Poppins', sans-serif;

        margin-top: 2.4rem;
      }
    }
    
    .dishIngredients {
      min-width: 25rem;

      display: flex;
      flex-flow: row wrap;
      justify-content: center;

      gap: 2.4rem;

      margin-top: 2.4rem;
      margin-bottom: 4.8rem;
    }

    #orderData {
      flex-direction: row;
      align-items: center;

      min-width: 23rem;

      .include {
        height: 3.7rem;

        padding-inline: 0.5rem;

        gap: 0.7rem;

        font-size: 0.95rem;

        > svg {
          height: 2.15rem;
          width: 2.15rem;
        }
      }
    }

  }
  

`;