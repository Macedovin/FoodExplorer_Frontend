import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.input_icon};

  background-color: ${({ theme }) => theme.search_background};

  border-radius: 0.5rem;

  margin-top: 3.6rem;

  > input {
    width: 100%;
    height: 4.8rem;

    overflow-wrap: break-word;

    padding: 1.4rem;

    color: ${({ theme }) => theme.input_text};
    font-size: clamp(1.3rem, 0.3rem + 3vw, 1.6rem);
    
    background-color: transparent;

    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.search_placeholder}; // LIGHT 500
    }
  }

  > button {
    margin-left: 1.4rem;
  }

`;