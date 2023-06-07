import styled from 'styled-components';

export const Container = styled.div`

display: flex;
align-items: center;

> svg {
  height: 2.4rem; 
  width: 2.4rem; 

  cursor: pointer;
} 

> svg path {
  fill: ${({ theme }) => theme.primary_text};
}

.hide {
  display: none;
}

`;