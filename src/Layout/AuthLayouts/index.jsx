import { Container } from './styles';

import { Outlet } from 'react-router-dom'; 

export function AuthLayout({ isNotFound = false }) {
 
  return (
    <Container>
      <Outlet />
    </Container>
  );
}