import { IconButton } from '../IconButton';
import { ButtonText } from '../ButtonText';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as UserHistory } from '../../assets/icons/OrderHistory.svg';

export function HeaderMyHistory() {
  const navigate = useNavigate(); 

  function handleRedirect() {
    navigate('/my_orders');
  }

  return(
    <>
      <IconButton
        className='my-history-bdg'
        onClick={handleRedirect}
      >
        <UserHistory />
      </IconButton>

      <ButtonText
        className='my-history-btn'
        title='Histórico de pedidos'
        onClick={handleRedirect}
      />
    </>

  );
}