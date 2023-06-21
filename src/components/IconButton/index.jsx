import { Container } from './styles';

export function IconButton({ onClick, children, ...rest }) {
  return (
    <Container 
      onClick={onClick} 
      {...rest}
    >
      {children}
    </Container>
  );
} 