/* import { Container } from './styles';
 */
import { Outlet } from 'react-router-dom'; 

import { Mobile_wrapper } from '../../components/Mobile_wrapper';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer'; 

export function Layouts() {
  return (
    <Mobile_wrapper>
    {/* <Container> */}
      <Header />
        <Outlet />
      <Footer />
    {/* </Container> */}
    </Mobile_wrapper>
  );
}