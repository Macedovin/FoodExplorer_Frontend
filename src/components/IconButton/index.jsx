import { Container } from './styles';

export function IconButton({ inputType, onClick, children, ...rest }) {
  return (
    <Container 
      onClick={onClick} 
      {...rest}
    >
      {children}
    </Container>
  );
} 