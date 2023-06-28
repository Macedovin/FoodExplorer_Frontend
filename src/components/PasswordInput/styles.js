import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  > label {

    color: ${({ theme }) => theme.input_icon};
  }

`;

export const LabelWrapper = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 2.5rem;

  > label {
    
    display: flex;
    flex-direction: column;
    
    gap: 0.5rem;
    
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.input_icon};

  }
`;

export const InputWrapper = styled.div`
  height: 4.8rem;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.search_background};

  padding: 1.2rem 1.4rem;
  
  border: 0;
  border-radius: 0.8rem;  
  
  
  > input {
    width: 100%;
    
    font-family: 'Roboto', sans-serif;
    font-size: clamp(1.2rem, 0.5rem + 2vw, 1.6rem);
    color: ${({ theme }) => theme.input_text};
    
    background-color: transparent;
    
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.search_placeholder}; // LIGHT 500
    }
  }

  > button {
    
    display: flex;
    align-items: center;

    background: transparent;
    border: none;

    margin: 0;
    padding: 0;

    > svg {
      height: 2.1rem;
      width: 2.1rem;
    }

    > svg path {
      fill: ${({ theme }) => theme.search_placeholder};
    }

  }
`;