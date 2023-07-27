import { BadgeContainer, InnerContainer, BadgeText } from './styles.js';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';

import { ReactComponent as Receipt } from '../../assets/icons/Receipt.svg';

export function HeaderOrders({ to }) {
  
  const navigate = useNavigate();

  const [orderQuantity, setOrderQuantity] = useState(0);

  let dishes = [];

  console.log(dishes.length)

  function handleRedirect() {
    navigate('/orders');
  }

  return(
    <>
      <BadgeContainer 
        className='order-bdg'
        to='/orders'
      >
        <Receipt width={26} height={23} />
        <InnerContainer>
          <BadgeText>
            {dishes.length === 0 ? orderQuantity : orderQuantity + 1}
          </BadgeText>        
        </InnerContainer>
      </BadgeContainer>

      <Button 
        className='order-btn'
        title='Pedidos'
        icon={Receipt}
        quantity={dishes.length === 0 ? `${orderQuantity}` : orderQuantity + 1}
        onClick={handleRedirect}
      />    
    </>
  );
}