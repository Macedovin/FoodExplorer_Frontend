import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

/*   //DESKTOP
  background-color: ${({ theme }) => theme.header_background};

  padding: 6.4rem;

  border-radius: 1.6rem; */

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
  
  
  gap: 0.8rem;
  
  font-family: 'Roboto', sans-serif;
  
  > h1{
    font-size: 2.4rem;
    font-weight: 700;

    color: ${({ theme }) => theme.secondary_text}
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;

  margin-top: 7.3rem;

  > h2 {
    
    display: none;

    color: ${({ theme }) => theme.secondary_color};
    font-size: 3.2rem;
    font-weight: 500;
  }

  .handle {
    height: 4.8rem;

    &:hover {
      
      background-color: ${({ theme }) => theme.buttons_hover};
    }
  }

  > a { 
    align-self: center;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.secondary_text};
  }
`;