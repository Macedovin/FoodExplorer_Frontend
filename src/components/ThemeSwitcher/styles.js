import styled from 'styled-components';

export const Container = styled.div`

display: flex;
align-items: center;

> svg {
  cursor: pointer;
} 

> svg path {
  fill: ${({ theme }) => theme.primary_text};
}

.hide {
  display: none;
}

`;