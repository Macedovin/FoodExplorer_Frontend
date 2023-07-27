import styled from 'styled-components';

export const Container = styled.main`
  grid-area: content; 
  
  overflow-x: visible;
  overflow-y: overlay;

  padding-inline: clamp(2.2rem, 2.5rem + 4vw, 5.6rem);

  padding-top: 3.7rem;
  padding-bottom: 5.4rem;

  .goBack {
    font-size: 2.4rem;
    font-weight: 500;
    
    > svg {     
      margin-right: 1.1rem;

      height: 2.2rem; 
      width: 1.2rem;
    }

    > svg path {
      fill: ${({ theme }) => theme.primary_text};
    }
  }
  
  .foodInfos {
    height: fit-content;
    width: 100%;

    border: none;

    margin-top: 1.6rem;

    padding: 0;
    gap: 0;
  
    background: none;

    .cardPicture {
  
      height: 26.4rem;
      width: 26.4rem;
      
      > img {
        height: 26.4rem;
        width: 26.4rem;
      }
    }
    
    &:hover {
      transform: scale(1);

      .cardPicture {
        transform: translateY(0);
      }
    }

    .dishData {

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

      > h3 {
        display: none;
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

  .edit-redirect {
    height: 4.8rem;
  }

  @media only screen and (min-width: 768px) {    
    .goBack {
      font-weight: 700;
    }

    .foodInfos { 
      margin-top: 4.2rem;
      
      gap: 4.7rem;  

      .cardPicture {
  
        height: 39rem;
        width: 39rem;
        
        > img {
          height: 39rem;
          width: 39rem;
        }
      }

      .dishData {
        gap: 2.4rem;

        > h2 {
          font-size: 4rem;
        }

        > p {
          font-size: 2.4rem;
        }

      }

      .dishIngredients {
        margin-top: 4.8rem;
      }
    
      #orderData {

        .include {
          height: 4.8rem;

          margin-left: 2rem;
        }
      }
    }
  }
  
  @media only screen and (min-width: 1024px) {
    padding-top: 2.3rem;
    
    .foodInfos {
      flex-direction: row;

      gap: 6.7rem; 

      .desktop-break_point {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .dishData {
          align-items: flex-start;

          > h2, p {
            margin-top: 0;
          }
        }

        #orderData {
          gap: 3.3rem;

          .include {
            height: 4.8rem;
            width: 16.2rem;

            margin-left: 0;
          }
        }
      }
    }

    .edit-redirect {
      width: 16.2rem;
    }
  }

  @media only screen and (min-width: 1900px) {
    padding-inline: 17rem;

    .foodInfos {
      margin-top: 10rem;
    }
  }
`;