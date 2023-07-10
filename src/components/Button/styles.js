import styled from 'styled-components';

export const Container = styled.button`

  height: 3.2rem;
  width: 100%;

  background-color: ${({ theme }) => theme.buttons_background};

  font-weight: 500;
  color: ${({ theme }) => theme.secondary_text};

  display: flex;
  align-items: center;
  justify-content: center;

  > svg path {
    fill: ${({ theme }) => theme.secondary_text};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.buttons_disabled};

    cursor: default; 
  }
`;