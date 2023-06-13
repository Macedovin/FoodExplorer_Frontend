import styled from 'styled-components';

export const Container = styled.header`

  height: 11.4rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.header_background}; // DARK_DARK_700

  padding-top: 3.2rem;
  //padding-bottom: 2.1rem;
  padding-inline: clamp(1.4rem, 4.4vw, 2.8rem);

  > h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.1rem;
    font-weight: 400;

    color: ${({ theme }) => theme.secondary_text}; 

    margin-left: 3.5rem;

  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;

  gap: 0.9rem;
  
  > img {

    width: 6.4rem;
    height: 6.4rem;
  
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end; 

    font-size: 1.4rem;

    line-height: 2.2rem;
    
    span {
        font-family: 'Roboto', sans-serif;

        color: ${({ theme }) => theme.primary_text}; 
      }
  
      strong {
      font-weight: 500;
      
      color: ${({ theme }) => theme.secondary_text};
    }
  }

`;