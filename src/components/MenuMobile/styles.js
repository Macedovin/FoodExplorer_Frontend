import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden; 

    transform: translateX(-5rem);
  }

  to {
    opacity: 1;
    visibility: visible; 

    transform: translateX(0);
  }
`;

export const Container = styled.div`
  .menu {

    display: grid;
    grid-template-rows: 11.4rem 1fr 7.7rem;
    grid-template-areas:
      'menu_header'
      'content'
      'footer';

    height: 100vh;
    width: 100vw;

    background-color: ${({ theme }) => theme.full_background};

    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

    > main {
      grid-area: content;

      background-color: ${({ theme }) => theme.full_background};

      overflow-y: scroll;
    }

    > Footer {
      position: fixed;
      bottom: 0;
    }
  }
  
  .hidden {
    opacity: 0;
    visibility: hidden; 

    transform: translateX(-5rem);

    transition: 0.5s;
  }

  .visible {
    animation: ${slideIn} 0.5s ease-out; 

    transition-timing-function: 0.5s;

    li:nth-child(1) {
      animation: ${slideIn} 0.5s 0.1s ease-out backwards;
    }

    li:nth-child(2) {
      animation: ${slideIn} 0.5s 0.2s ease-out backwards;
    }

    li:nth-child(3) {
      animation: ${slideIn} 0.5s 0.3s ease-out backwards;
    }

    li:nth-child(4) {
      animation: ${slideIn} 0.5s 0.4s ease-out backwards;
    }
  }
`;  

export const MenuIcon = styled.div`  
  
  height: 1.8rem;
  width: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  position: absolute;
  z-index: 101;
  top: 6.5rem;
  left: 2.2rem;  

  cursor: pointer;

  .burger-bar {
    height: 0.3rem;
    width: 2.4rem;

    border-radius: 0.3rem;

    background-color: ${({ theme }) => theme.secondary_text};

  }

  /* ----- BUTTON CLICKED ----- */

  .burger-bar.clicked:nth-child(1) {
    transform: rotate(45deg) translate(0.3em, 0.75rem);
    transition: ease-out 0.5s;
  }

  .burger-bar.clicked:nth-child(2) {
    transform: scale(0.1);
    transition: ease-out 0.5s;
  }

  .burger-bar.clicked:nth-child(3) {
    transform: rotate(137deg) translate(-0.25rem, 0.7rem);
    transition: ease-out 0.5s;
  }

  /* ---- BUTTON UNCLICKED ---- */

  .burger-bar.unclicked {
    transform: rotate(0) translate(0);
    transition: ease-in 0.5s;
  }  
`;

export const MenuList = styled.ul`

  padding-top: 3.6rem;

  padding-bottom: 20rem;

  padding-inline: 2.8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

`;


