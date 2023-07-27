import { Container } from './styles.js';

export function SelectRoot({ className, children }) {
  return(
    <Container
      className={className}
    >
      {children}
    </Container>
  );
}