import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin-block: 5rem;

  @media only screen and (width: 375px){
    margin-top: -2rem;
    margin-bottom: 5rem;
  }

  @media only screen and (width: 390px) {
    margin-top: -3rem;
  }

  @media only screen and (min-width: 768px) {
    display: flex;

    gap: 1.7rem;

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
    height: 4.7rem;
    width: 4.7rem;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    align-self: center;

    text-align: center;

    gap: 3.5rem;

    > svg {
      height: 9.3rem;
      width: 9.3rem;
    }
  }  

  @media only screen and (min-width: 920px) {
    flex-direction: row;
  }
`;

export const LogoText = styled.div`
  display: flex;
  align-items: center;
  
  gap: 0.8rem;
  
  font-family: 'Roboto', sans-serif;
  
  > h1 {
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

    #email,
    .input-border {
      border: 1px solid ${({ theme }) => theme.secondary_text}
    }
  } 
`; 