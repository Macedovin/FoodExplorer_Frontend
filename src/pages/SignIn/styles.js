import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin-top: 7.3rem;

/*   //DESKTOP
  background-color: ${({ theme }) => theme.header_background};

  padding: 6.4rem;

  border-radius: 1.6rem; */


  > h2 {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;

  .handle {
    height: 4.8rem;
  }

  > a { 
    align-self: center;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.secondary_text};
  }
`;