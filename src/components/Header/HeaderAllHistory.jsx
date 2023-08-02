import { IconButton } from '../IconButton';
import { ButtonText } from '../ButtonText';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as AllOrders } from '../../assets/icons/AllHistory.svg'; 

export function HeaderAllHistory() {
  const navigate = useNavigate(); 

  function handleRedirect() {
    navigate('/orders_history');
  }
  
  return(
    <>
      <IconButton
        className='all-orders-bdg'
        onClick={handleRedirect}
      >
        <AllOrders />
      </IconButton>
      
      <ButtonText
        className='all-orders-btn'
        title='Histórico de pedidos'
        onClick={handleRedirect}
      />
    </>
  );
}