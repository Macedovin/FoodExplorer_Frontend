import { BadgeContainer, InnerContainer, BadgeText } from './styles.js';

import { useState } from 'react';

import { useCart } from '../../hooks/cart.jsx'; 

import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';

import { ReactComponent as Receipt } from '../../assets/icons/Receipt.svg';

export function HeaderOrders() {
  
  const navigate = useNavigate();

  const { getCartQuantity } = useCart();

  function handleRedirect() {
    navigate('/check_out');
  }

  return(
    <>
      <BadgeContainer 
        className='order-bdg'
        to='/check_out'
      >
        <Receipt width={26} height={23} />
        <InnerContainer>
          <BadgeText>
            {getCartQuantity}
          </BadgeText>        
        </InnerContainer>
      </BadgeContainer>

      <Button 
        className='order-btn'
        title='Pedidos'
        icon={Receipt}
        quantity={getCartQuantity === 0 ? '0' : getCartQuantity}
        onClick={handleRedirect}
      />    
    </>
  );
}