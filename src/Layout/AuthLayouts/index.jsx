import { Container, Brand, LogoText } from './styles';

import { Outlet } from 'react-router-dom'; 

import { ReactComponent as LogoIcon } from '../../assets/icons/Logo_polygon.svg';

export function AuthLayout() {
  return (
    <Container>
      <Brand>
        <LogoIcon />
        <LogoText>
          <h1>food Explorer</h1>
        </LogoText>
      </Brand>
      <Outlet />
    </Container>
  );
}