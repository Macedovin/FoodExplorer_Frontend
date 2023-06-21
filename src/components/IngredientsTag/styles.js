import styled from 'styled-components';

export const Container = styled.span`
  font-size: 1.2rem;

  padding: 0.4rem 0.8rem;
/*   margin-right: 0.6rem;
  margin-bottom: 0.8rem; */
  
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.input_text};
  
  background-color: ${({ theme }) => theme.ingredient_tag};
`;