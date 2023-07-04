import { Container } from './styles';

import { Outlet } from 'react-router-dom'; 

//import { Mobile_wrapper } from '../Mobile_wrapper';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer'; 

export function UsersLayout() {
  return (
/*     <Mobile_wrapper> */
          <Container> 
            <Header.Root>
              <Header.MenuMobile />
              <Header.Brand />
              <Header.Badge />
              <Header.ThemeSwitcher />
            </Header.Root>
              <Outlet />
            <Footer />
          </Container>
/*     </Mobile_wrapper> */
  );
}