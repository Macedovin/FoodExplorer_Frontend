import { Container } from './styles';

export function FoodSection({ title, children }) {
  return(
    <Container>
      <h2>
        {title}
      </h2>
      <main>
        {children}
      </main>

    </Container>
  );
}