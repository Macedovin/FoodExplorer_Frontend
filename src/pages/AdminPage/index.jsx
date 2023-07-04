import { Container } from './styles';

//import { Mobile_wrapper } from '../../components/Mobile_wrapper';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer'; 

export function AdminPage() {
  return (
  /*     <Mobile_wrapper> */
      <Container>
        <Header />
        <main>
          <h2>
            Área de Administrador
          </h2>
        </main>
        <Footer />
      </Container>
  /*     </Mobile_wrapper> */
  );
}