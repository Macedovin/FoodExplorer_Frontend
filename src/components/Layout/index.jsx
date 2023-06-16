import { Container } from './styles';

import { Outlet } from 'react-router-dom'; 

//import { Mobile_wrapper } from '../Mobile_wrapper';
import { Header } from '../Header';
import { Footer } from '../Footer'; 

export function Layout() {
  return (
/*     <Mobile_wrapper> */
          <Container> 
            <Header />
              <Outlet />
            <Footer />
          </Container>
/*     </Mobile_wrapper> */
  );
}