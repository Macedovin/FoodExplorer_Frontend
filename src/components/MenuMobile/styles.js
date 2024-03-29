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

      padding-inline: 2.8rem;

      background-color: ${({ theme }) => theme.full_background};

      overflow-y: scroll;
    }

    > Footer {
      position: fixed;
      bottom: 0;
    }

    @media only screen and (width: 320px) {
      grid-template-rows: 6.8rem 1fr 5.7rem;
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

    li:nth-child(5) {
      animation: ${slideIn} 0.5s 0.5s ease-out backwards;
    } 
    
    li:nth-child(6) {
      animation: ${slideIn} 0.5s 0.6s ease-out backwards;
    } 

    li:nth-child(7) {
      animation: ${slideIn} 0.5s 0.7s ease-out backwards;
    } 

    li:nth-child(8) {
      animation: ${slideIn} 0.5s 0.8s ease-out backwards;
    } 

    li:nth-child(9) {
      animation: ${slideIn} 0.5s 0.9s ease-out backwards;
    } 
    
    li:nth-child(10) {
      animation: ${slideIn} 0.5s 0.10s ease-out backwards;
    } 
  }

  @media only screen and (min-width: 768px) {
      display: none;
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
  top: 6.4rem;
  left: 2.2rem;  

  @media only screen and (width: 320px) {
    top: 2.5rem;
    left: 2.2rem; 
  }

  cursor: pointer;

  .burger-bar {
    height: 0.3rem;
    width: 2rem;

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

export const MenuHeader = styled.header`
  
  grid-area: menu_header;

  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${({ theme }) => theme.header_background}; // DARK_DARK_700
  
  padding-top: 3.2rem;
  padding-inline: clamp(1.4rem, 4.4vw, 2.8rem);
  
  @media only screen and (width: 320px) {
    height: 6.8rem;
    
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  > h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.1rem;
    font-weight: 400;

    color: ${({ theme }) => theme.secondary_text}; 
    
    margin-left: 3.5rem;
  }
`;

export const MenuList = styled.ul`

  padding-top: 3.6rem;

  padding-bottom: 15rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

`;

export const MenuButtonLink = styled.li`
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.footer_logo};    

  cursor: pointer;

  color: ${({ theme }) => theme.primary_text};

  transition: 0.4s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.description}; 

    font-weight: 500;

    color: ${({ theme }) => theme.search_background};
  }  

  > button {
    width: 100%;
    height: 100%;
    
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 3.4rem;
    color: inherit;

    text-align: start;

    background-color: transparent;

    display: block;

    padding: 1rem;

    &:hover {

      font-weight: 500;
    }  

  }
`; 