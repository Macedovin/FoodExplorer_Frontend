import styled from 'styled-components';

export const Container = styled.div`
  max-width: clamp(33rem, 31rem + 52vw, 75rem);

  margin-top: 14rem;
  margin-right: 4.7rem;
  margin-left: 6.5rem;

  @media only screen and (width: 320px) {
    margin-block: 1.8rem;
    margin-right: 3.7rem;
    margin-left: 4.9rem;
  }

  @media only screen and (max-width: 390px) and (min-width: 375px) {
    margin-top: 11rem;
  }
`;