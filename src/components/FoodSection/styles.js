import styled from 'styled-components';

export const Container = styled.section`
      
  margin: 2.4rem 0;

  > h2 {
    color: ${({ theme }) => theme.primary_text};

    font-size: 1.8rem;
    font-weight: 500;

    margin-bottom: 2.4rem;
  }

  > main {
    display: flex;

    gap: 1.6rem;
  }
`;