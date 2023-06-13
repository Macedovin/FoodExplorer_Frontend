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

const slideOut = keyframes`
  from {
    opacity: 1;
    visibility: visible; 

    transform: translateX(0);
  }

  to {
    opacity: 0;
    visibility: hidden; 

    transform: translateX(-5rem);
  }
`;

export const Container = styled.div`
    .menu {
    height: 100vh;
    width: 100vw;

    background-color: ${({ theme }) => theme.full_background};

    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

  }

  .visible {

    animation: ${slideIn} 0.5s ease-out; 
  }
   
  .hidden {

    animation: ${slideOut} 0.5s ease-in-out forwards;
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

  padding-inline: 2.8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .MenuLi {
    width: 100%;
    
    padding: 1rem;

    border-bottom: 1px solid ${({ theme }) => theme.footer_logo};    
  
    cursor: pointer;
    
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 3.4rem;
    
    color: ${({ theme }) => theme.primary_text};

    transition: 0.3s;
         
    > a {
      color: inherit;
    }
  }

  .MenuLi:hover {
    background-color: ${({ theme }) => theme.description}; 

    font-weight: 500;

    color: ${({ theme }) => theme.search_background};

    a:hover {
      color: inherit;
    } 

  }  

`;


