import styled from 'styled-components';

export const Container = styled.button`
  background-color: transparent;

  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.primary_text};

  border: none;
`;