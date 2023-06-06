import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;

  height: 11.4rem;
  width: 100%;

  background-color: ${({ theme }) => theme.header_background}; // DARK_DARK_700
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 5.6rem 2.8rem 2.4rem;
`; 

export const Brand = styled.div`
  display: flex;
`;

export const LogoText = styled.div`
  display: flex;
`;