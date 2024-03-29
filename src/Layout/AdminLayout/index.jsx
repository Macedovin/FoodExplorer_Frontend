import { Container } from './styles';

import { Outlet } from 'react-router-dom'; 

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer'; 

export function AdminLayout() {
  return (
    <Container> 
      <Header.Root>
        <Header.MenuMobile />
        <Header.Brand />
        <Header.Search />
        <Header.AllHistory />
        <Header.Users />
        <Header.NewDish />
        <Header.Logout />
        <Header.ThemeSwitcher />
      </Header.Root>
        <Outlet />
      <Footer />
    </Container>
  );
}