import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  max-width: fit-content;
  
  color: ${({ theme, isNew }) => isNew ? theme.search_placeholder : theme.input_text};
  font-size: clamp(1.2rem, 0.5rem + 2vw, 1.6rem);
  font-family: 'Roboto', sans-serif;

  padding: 0.4rem 0.8rem;

  
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.search_placeholder}` : 'none'};
  border-radius: 0.5rem;

  
  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.ingredient_tag};
  
  > input {
    color: ${({ theme }) => theme.input_text};
    font-size: clamp(1.2rem, 0.5rem + 2vw, 1.6rem);
    font-family: 'Roboto', sans-serif;

    border: none;

    background-color: transparent;

    min-width: 8.5rem;
      
    &::placeholder {
      font-size: clamp(1.2rem, 0.5rem + 2vw, 1.6rem);
      color: ${({ theme }) => theme.search_placeholder}; 
    }
  }

  > button {
    border: none;
    
    background-color: transparent; 
    
    margin-left: 0.8rem;

    svg {
      height: 0.8rem;
      width: 0.8rem;
    }

    .btn-delete svg path {
      fill: ${({ theme }) => theme.secondary_text};
    }

    .btn-add svg path {
      fill: ${({ theme }) => theme.search_placeholder};
  }

  }

`;