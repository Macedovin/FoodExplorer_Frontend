import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 105;

  display: grid;
  height: 100vh;
  width: 100%;
  place-content: center;

  background-color: rgba(35, 33, 41, 0.6);

  > svg {
    height: 15rem;
    width: 15rem;

    animation: upDown 1s ease-in-out infinite;
  }
  
  > svg path {
    fill: ${({ theme }) => theme.primary_text};
  }

  /* ----------------- ANIMATIONS -------------*/

  @keyframes upDown {

    0%, 100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-35%);
    }
  }

`;