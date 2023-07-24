import styled from 'styled-components';

export const Container = styled.div`
  max-width: clamp(33rem, 31rem + 52vw, 75rem);

  margin-top: 14rem;
  margin-left: 6.5rem;
  margin-right: 4.7rem;

  @media only screen and (min-width: 320px) {
    margin-block: 1.8rem;
    margin-left: 4.9rem;
    margin-right: 3.7rem;
  }

  @media only screen and (max-width: 375px) and (min-width: 360px) {
    margin-top: 6rem;
  }

  @media only screen and (max-width: 450px) and (min-width: 390px) {
    margin-top: 11rem;
  }

  @media only screen and (width: 768px) {
    max-width: 100vw;

    margin-top: 17rem;
    margin-left: 3.9rem;
    margin-right: 3.6rem;
  }


  @media only screen and (min-width: 800px) {   
    max-width: 100vw;

    margin-top: 21rem;
  }  

  @media only screen and (min-width: 1024px) {
    margin-block: 11rem;
  }

`;