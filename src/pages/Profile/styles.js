import styled from 'styled-components';

export const Container = styled.main`

  grid-area: content;

  overflow-x: visible;
  overflow-y: overlay;

  height: max-content; 

  padding-inline: 5.4rem;

  padding-bottom: 5.4rem;

  @media only screen and (width: 320px) {
    padding-inline: 3.4rem;
  }

  .goBack {
    font-size: 1.6rem;
    font-weight: 500;

    text-align: left;

    color: ${({ theme }) => theme.primary_text};

    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-top: 1.1rem;

    svg {     
      margin-right: 0.7rem;

      height: 1.5rem; 
      width: 0.8rem;
    }

    svg path {
      fill: ${({ theme }) => theme.primary_text};
    }
  }

  > h1 {
    margin-top: 3.2rem;

    font-size: 3.2rem;
    font-weight: 500;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 2.6rem;

  > button {
    height: 4.8rem;
  }
`;

export const Avatar = styled.div`
  position: relative;

  width: 11rem;
  height: 11rem;

  margin: 2.5rem auto 0;  
  
  > img {
    border-radius: 50%;

    width: 11rem;
    height: 11rem;
  }

  > label {
    height: 3.6rem; 
    width: 3.6rem;

    background-color: ${({ theme }) => theme.buttons_background};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.2rem;
    right: -0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      height: 1.8rem;
      width: 1.8rem;
      
      path {
        stroke: ${({ theme }) => theme.primary_text};
        stroke-width: 2;  
      }
    }
    
  }

`;