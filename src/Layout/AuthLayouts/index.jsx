import { Container } from './styles';

import { Outlet } from 'react-router-dom'; 

export function AuthLayout() {
 
  return (
    <Container>
      <Outlet />
    </Container>
  );
}