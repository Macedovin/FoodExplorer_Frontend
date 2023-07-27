import { OrderInfos } from './styles';

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';

import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { ReactComponent as Remove } from '../../assets/icons/Minus.svg';
import { ReactComponent as Add } from '../../assets/icons/Plus.svg';

export function FoodCardOrderInfos({ id, button }) {
  const { title, btn_price, icon } = button;

  const { isAdmin } = useAuth();

  const { getItemQuantity, increaseOneFromCart, decreaseOneFromCart, removeFromCart } = useCart();

  const [total, setTotal] = useState(1);
  
  function handlePreventDefault(event) {
    if (event.defaultPrevented) return;  
    event.preventDefault();
  }

  function handleRemove(event) {
    handlePreventDefault(event);

    /* decreaseOneFromCart(id); */

    console.log('Fui clicado para diminuir -> ', id)
    setTotal((prevState) => Math.max(prevState - 1, 1));
  }

  function handleAdd(event) {
    handlePreventDefault(event);

    /* increaseOneFromCart(id); */

    console.log('Fui clicado para aumentar -> ', id);

    setTotal((prevState) => prevState + 1);  
  }

  if(!isAdmin) {
    return (  
        <>
      
          <OrderInfos id='orderData' >
            <div className="quantity">
              <IconButton onClick={handleRemove} 
              >
                <Remove  />
              </IconButton>
                <span>{/* {quantity} */}{total < 10 ? `0${total}` : total}</span>
              <IconButton onClick={handleAdd}
              >
                <Add  />
              </IconButton>
            </div>
            <Button
              className='include' 
              title={title}
              onClick={handlePreventDefault}
              btn_price={btn_price}
              icon={icon}
            />
          </OrderInfos>
        </>
      )
    }
    return null;
}