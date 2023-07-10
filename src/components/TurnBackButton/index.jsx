import { Container } from './styles';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowLeft } from '../../assets/icons/CaretLeft.svg';

export function TurnBackButton({ ...rest }) {
  const navigate = useNavigate();

  function handleTurnBack() {
    navigate(-1);
  }
  
  return (
    <Container
      onClick={handleTurnBack}
      {...rest}
    >
      <ArrowLeft />
      voltar
    </Container>
  );
}