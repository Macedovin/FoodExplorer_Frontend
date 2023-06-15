import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.footer_logo};    

  cursor: pointer;
  
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 3.4rem;
  
  color: ${({ theme }) => theme.primary_text};

  transition: 0.4s ease-in-out;

  list-style: none;
        
  &:hover {
    background-color: ${({ theme }) => theme.description}; 

    font-weight: 500;

    color: ${({ theme }) => theme.search_background};
  }  

  > a {
    width: 100%;
    height: 100%;

    display: block;

    padding: 1rem;

    color: inherit;

    &.active {
      font-weight: 500;

      color: ${({ theme }) => theme.search_background};

      background-color: ${({ theme }) => theme.menu_active};
    }

    &:hover {
      color: inherit;
    } 
  }
`;