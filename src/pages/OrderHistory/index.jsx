import { Container } from './styles';

import { TurnBackButton } from '../../components/TurnBackButton';

export function OrderHistory() {

  return (
    <Container>

      <TurnBackButton 
        className='goBack'
      />

      <h1>
        Histórico de pedidos do usuário
      </h1>

    </Container>

  );
}