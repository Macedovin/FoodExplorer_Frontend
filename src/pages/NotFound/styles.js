import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2.5rem;

  font-family: 'Roboto', sans-serif;

  > h1 {
    font-size: 3.4rem;
    color: ${({ theme }) => theme.price};
  }

  > svg {
    height: 15.7rem;
    width: 15.7rem;
  }

  > svg path {
    fill: ${({ theme }) => theme.input_icon};
  }

  > button {
    height: 4.8rem;
  }
`;

export const Information = styled.div`
  text-align: center;

  > h2 {
    font-size: 2rem;
  }

  > p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.input_icon};

    margin-top: 1.2rem;
  }
`;