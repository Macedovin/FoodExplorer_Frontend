import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;

  label {
    display: block;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    margin-bottom: 1.6rem;

    color: ${({ theme }) => theme.secondary_text};
  }
`; 

export const SelectContainer = styled.div`
  
  background-color: ${({ theme }) => theme.select_background};

  height: 4.8rem;

  display: flex;
  align-items: center;
  
  > input {
    flex: 1;
    
    font-family: 'Roboto', sans-serif;
    font-size: clamp(1.2rem, 0.5rem + 2vw, 1.6rem);
    color: ${({ theme }) => theme.input_text};
    
    background-color: transparent;
    border: none;
    
    padding-left: 1.6rem;


    &::placeholder {
      color: ${({ theme }) => theme.search_placeholder}; // LIGHT 500
    }
  }
`;

export const InnerSelect = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  flex: 1;

  height: 100%;
    
  background-color: ${({ theme }) => theme.search_background};

  padding-left: 1.6rem;

  cursor: pointer;

  &:hover {
      filter: brightness(1.4);
  }

  > span {

    width: 100%;

    font-family: 'Roboto',sans-serif;
    font-size: clamp(1.2rem, 0.5rem + 2vw, 1.6rem);
    color: ${({ theme }) => theme.input_icon};
    
  }

  > button {
    width: 3.8rem;

    background-color: ${({ theme }) => theme.search_background};

    padding-right: 1rem;
  }
`;

export const ChangeButton = styled.div`

  display: flex;
  align-items: center;
  
  height: 100%;
  
  border-radius: 0 0.4rem 0.4rem 0;

  background-color: ${({ theme }) => theme.search_background};
  
  padding-right: 1rem;

  cursor: pointer;
  
  &:hover {
    filter: brightness(1.4);
  }
  
  > button {
    width: 3.2rem;

    background-color: ${({ theme }) => theme.search_background};

    border-left: 1px solid ${({ theme }) => theme.search_placeholder}; // LIGHT 500

    padding-left: 1rem;

    border-radius: 0;

    transition: 0.2s;
    
  }
`;

export const OptionsList = styled.ul`

  display : none;

  position: absolute;
  top: calc(100% + 0.1rem);
  left: 0.3rem;
  z-index: 100;

  max-height: 11rem;
  width: 98%;  

  overflow-y: scroll;

  margin-top: 0.5rem;

  background-color: ${({ theme }) => theme.search_background};

  border-radius: 0 0 0.5rem 0.5rem; 

  &.show {
    display: block;
  }

  > li:first-child {
    height: 3.4rem;
  }

  > li {

    font-family: 'Roboto', sans-serif;
    font-size: clamp(1.2rem, 0.5rem + 2vw, 1.6rem);

    background-color: ${({ theme }) => theme.search_background};

    padding-block: 1rem;
    padding-left: 1.6rem;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      filter: brightness(1.4);
    }

    &.selected {
      
      background-color: ${({ theme }) => theme.footer_rights};

      color: ${({ theme }) => theme.search_background};
      font-weight: 700;
    }
  }

`;