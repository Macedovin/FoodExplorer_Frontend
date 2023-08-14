import { Container } from './styles'; 

import { TurnBackButton } from '../../components/TurnBackButton';

export function Orders() {

  return (
    <Container>

      <TurnBackButton 
        className='goBack'
      />

      <h1>
        Histórico de todos os pedidos da aplicação
      </h1>
        
    </Container>
  );
}