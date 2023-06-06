import { Container, Brand, LogoText } from './styles';

import { ThemeSwitcher } from '../../components/ThemeSwitcher';

import { ReactComponent as LogoIcon } from '../../assets/icons/Logo_polygon.svg';

export function Header() {
  return (
    <Container>
      <Brand>
        <LogoIcon />
        <LogoText>
          <h1>Food Explorer</h1>
          <span>admin</span>
        </LogoText>
      </Brand>
      <ThemeSwitcher />
    </Container>
  );
}