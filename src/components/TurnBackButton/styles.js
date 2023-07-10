import styled from 'styled-components'

export const Container = styled.button`

  font-size: 1.6rem;
  font-weight: 500;

  text-align: left;

  color: ${({ theme }) => theme.primary_text};

  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 1.1rem;

  width: fit-content;

  svg {     
    margin-right: 0.7rem;

    height: 1.5rem; 
    width: 0.8rem;
  }

  svg path {
    fill: ${({ theme }) => theme.primary_text};
  }
`;

