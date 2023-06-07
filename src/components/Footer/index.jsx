import { Container, Brand } from './styles';

import { ReactComponent as LogoIcon } from '../../assets/icons/Logo_polygon.svg';

export function Footer() {
  return(
    <Container>
      <Brand>
        <LogoIcon />
        <h1>food Explorer</h1>
      </Brand>
      <p>
        © 2023 - Todos os direitos reservados. 
      </p>
    </Container>
  );
}