import { Container } from './styles';

export function IngredientsTag({ name, ...rest }) {
  return (

    <Container {...rest}>
      {name}
    </Container>

  );
}