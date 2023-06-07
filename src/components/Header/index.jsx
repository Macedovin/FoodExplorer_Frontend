import { Container, Brand, LogoText } from './styles';

import { ThemeSwitcher } from '../ThemeSwitcher';
import { OrderBadge } from '../OrderBadge';
import { MenuIcon } from '../MenuIcon'

import { ReactComponent as LogoIcon } from '../../assets/icons/Logo_polygon.svg';

export function Header() {
  return (
    <Container>
      <MenuIcon />
      <Brand>
        <LogoIcon />
        <LogoText>
          <h1>food Explorer</h1>
          <span>admin</span>
        </LogoText>
      </Brand>
      <OrderBadge />
      <ThemeSwitcher />
    </Container>
  );
}