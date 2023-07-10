import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > label {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }
  
  > textarea {
    height: 17.2rem;
    width: 100%;
    
    margin-top: 1.6rem;
    
    font-family: 'Roboto', sans-serif;
    font-size: clamp(1.2rem, 0.5rem + 2vw, 1.6rem);
    color: ${({ theme }) => theme.input_text};

    padding: 1.4rem;
  
    background-color: ${({ theme }) => theme.select_background};
  
    border: none;
    border-radius: 0.8rem;
  
    resize: none;
    
    &::placeholder {
      font-size: clamp(1.2rem, 0.5rem + 2vw, 1.6rem);

      color: ${({ theme }) => theme.search_placeholder}; 
    }
  }
`;