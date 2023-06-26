import styled from 'styled-components';

export const Container = styled.div`
  max-width: clamp(33rem, 31rem + 52vw, 75rem);

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: clamp(3.7rem, 2.5rem + 9vw, 6.5rem);
  margin-right: clamp(2.7rem, 1.5rem + 8vw, 4.7rem);
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;

  gap: 0.8rem;
  
  text-align: start;

  > svg {
    height: 2.7rem;
    width: 2.7rem;
  }
`;

export const LogoText = styled.div`
  display: flex;
  align-items: center;
  
  
  gap: 0.87rem;
  
  font-family: 'Roboto', sans-serif;
  
  > h1{
    font-size: 2.4rem;
    font-weight: 700;

    color: ${({ theme }) => theme.secondary_text}
  }

`;