import { Container, Brand, LogoText } from './styles';

import { ThemeSwitcher } from '../ThemeSwitcher';
import { OrderBadge } from '../OrderBadge';
import { MenuMobile } from '../MenuMobile';

import { ReactComponent as LogoIcon } from '../../assets/icons/Logo_polygon.svg';

export function Header() {
  return (
    <Container>
      <MenuMobile />
      <Brand to='/'>
        <LogoIcon />
        <LogoText>
          <h1>food Explorer</h1>
        </LogoText>
      </Brand>
      <OrderBadge to='/orders' />
      <ThemeSwitcher />
    </Container>
  );
}