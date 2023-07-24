import { Container, Information } from './styles.js';

import { Button } from '../../../components/Button';

import{ ReactComponent as NoFood } from '../../../assets/icons/covered_food.svg';

import { useNavigate } from 'react-router-dom';

export function NotFoundAuth() {
  const navigate = useNavigate();

  function handleTurnBack() {
    navigate('/');
  }

  return(
    <Container>
      <h1>
        404
      </h1>
      <NoFood />
      <Information>
        <h2>
          Desculpe! Prato não encontrado!
        </h2>
        <p>
          A página que você esta tentando acessar não foi encontrada!
        </p>
      </Information>
      <Button
        type='button'
        title='VOLTAR PARA O FOODEXPLORER'
        onClick={handleTurnBack}
      />
    </Container>
  );
}