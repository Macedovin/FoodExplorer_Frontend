import styled from 'styled-components';

export const Container = styled.div`

display: flex;
align-items: center;

> svg {
  height: 2.6rem; 
  width: 2.6rem; 

  cursor: pointer;
} 

> svg:first-child {
  height: 2.3rem; 
  width: 2.3rem; 
}

.hide {
  display: none;
}

`;