import { Container } from './styles';

import { Outlet } from 'react-router-dom'; 

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer'; 

export function UsersLayout() {
  return (
    <Container> 
      <Header.Root>
        <Header.MenuMobile />
        <Header.Brand />
        <Header.Search />
        <Header.Favorites />
        <Header.MyHistory />
        <Header.Orders />
        <Header.Logout />
        <Header.ThemeSwitcher />
      </Header.Root>
        <Outlet />
      <Footer />
    </Container>
  );
}