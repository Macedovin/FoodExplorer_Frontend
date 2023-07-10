import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    opacity: 0;
    visibility: hidden; 

    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    visibility: visible; 

    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.2rem;

  width: fit-content;
  min-height: 2rem;

  padding-inline: 1.2rem;
  margin-bottom: 0.5rem;

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.buttons_hover};

  background-color: ${({ theme }) => theme.input_error};

  border-radius: 0.3rem;
  
  animation: ${slideUp} 0.5s 0.1s ease-in-out backwards;


  > svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  > svg path {
    fill: ${({ theme }) => theme.buttons_hover};
  } 

`;