import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    display: flex;

    align-items: center;
    justify-content: space-around;
  }
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

  @media only screen and (min-width: 768px) {
    align-self: center;

    > svg {
      height: 4.3rem;
      width: 4.3rem;
    }
  }  

  @media only screen and (max-width: 850px) and (min-width: 800px) {
    max-width: 23.5rem;
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

  @media only screen and (min-width: 768px) {
    > h1 {
      font-size: 3.6rem;
    } 
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;
  
  margin-top: 7.3rem;

  > h2 {
    
    display: none;
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

  //DESKTOP
  @media only screen and (min-width: 768px) {
    background-color: ${({ theme }) => theme.header_background};

    padding: 6.4rem;
    margin-top: 0;

    border-radius: 1.6rem;

    min-width: 47.6rem;

    > h2 {
      
      display: block;

      color: ${({ theme }) => theme.secondary_color};
      font-size: 3.2rem;
      font-weight: 500;

      text-align: center; 
    }
  }
`;