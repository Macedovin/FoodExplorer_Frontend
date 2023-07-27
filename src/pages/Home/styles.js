import styled, { keyframes } from 'styled-components';

export const Container = styled.main`

  grid-area: content; 

  overflow-x: hidden;
  overflow-y: overlay;

  position: relative;

  .bg-image {
    width: 94vw;

    position: relative;
    left: calc(-49vw + 50%);

    @media only screen and (min-width: 1024px) {
      width: 82vw;

      position: relative;
      left: calc(-42vw + 50%);
    }
  }

  .user-greet {
    position: absolute;
    top: 2.5rem;
    right: 4.5rem;

    display: none;

    @media only screen and (min-width: 768px) {
      display: flex;
    }

    @media only screen and (min-width: 1024px) {
      right: 11rem;
    }

    @media only screen and (min-width: 1440px) {
      top: 3.5rem;
      right: 16rem;
    }

    @media only screen and (min-width: 1440px) {
      top: 3.5rem;
      right: 16rem;
    }

    @media only screen and (min-width: 1700px) {
      top: 3.5rem;
      right: 26rem;
    }
  }

`;

export const FirstContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  gap: 2.5rem;

  height: 100%;

  padding-inline: 3.4rem;

  color: ${({ theme }) => theme.primary_color};
  `;  

export const Action = styled.div`
  > p {
    color: ${({ theme }) => theme.secondary_text};
    
    margin-top: 1.5rem;
  }
  
  > button {
    margin-top: 3.5rem;
    
    height: 4.8rem;
  }
`;