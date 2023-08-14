import { Container } from './styles';

import { TurnBackButton } from '../../components/TurnBackButton';

export function AllUsers() {

  return (
    <Container>
      <TurnBackButton 
        className='goBack'
      />

      <h1>
        Visualização de todos os usuários da aplicação
      </h1>
     
    </Container>
  );
}