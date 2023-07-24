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

    @media only screen and (width: 320px) {
      padding-left: 0.7rem;
      padding-right: 0.8rem;
    }
  }

  .search {
    height: 2.4rem;
    width: 2.4rem;

    margin-left: 1.4rem;
  
    @media only screen and (width: 320px) {
      height: 1.9rem;
      width: 1.9rem;

      margin-left: 0.9rem;
    }
  }

  .clear {
    height: 1.3rem;
    width: 1.3rem;

    margin-right: 1.2rem;

    @media only screen and (width: 320px) {
      height: 1rem;
      width: 1rem;
    }
  }

`;