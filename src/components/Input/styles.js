import styled, { ThemeConsumer } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  > label {
    
    display: flex;
    flex-direction: column;
    
    gap: 0.5rem;
    
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.input_icon};

    
    input {
      height: 4.8rem;
      width: 100%;
      
      padding: 1.2rem 1.4rem;
      
      font-family: 'Roboto', sans-serif;
      font-size: clamp(1.2rem, 0.5rem + 2vw, 1.6rem);
      color: ${({ theme }) => theme.input_text};
      
      background-color: ${({ theme }) => theme.search_background};
      
      border: 0;
      border-radius: 0.8rem;

      &::placeholder {
        color: ${({ theme }) => theme.search_placeholder}; // LIGHT 500
      }
    }
  }

`;