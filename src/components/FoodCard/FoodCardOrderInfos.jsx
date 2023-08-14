import { OrderInfos } from './styles';

import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';

import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { ReactComponent as Remove } from '../../assets/icons/Minus.svg';
import { ReactComponent as Add } from '../../assets/icons/Plus.svg';

export function FoodCardOrderInfos({ dish, button }) {
  const { title, btn_price, icon } = button;
  const { id } = dish;

  const { isAdmin } = useAuth();

  const { handleAddToCart } = useCart();

  const [total, setTotal] = useState(1); 
  
  function handlePreventDefault(event) {
    if (event.defaultPrevented) return;  
    event.preventDefault();
  }
  
  function handleRemove(event) {
    handlePreventDefault(event);
    
    setTotal((prevState) => Math.max(prevState - 1, 1));
  }
  
  function handleAdd(event) {
    handlePreventDefault(event);
    
    setTotal((prevState) => prevState + 1);
  }

  if(!isAdmin) {
    return (  
        <>
      
          <OrderInfos id='orderData' >
            <div className="quantity">
              <IconButton 
                onClick={(event) => {
                  handleRemove(event)
                }} 
              >
                <Remove  />
              </IconButton>
                <span>                
                  {total < 10 ? `0${total}` : total}
                </span>
              <IconButton 
                onClick={(event) => {
                  handleAdd(event)
                }}
              >
                <Add  />
              </IconButton>
            </div>
            <Button
              type='button'
              className='include' 
              title={title}
              onClick={(event) => {
                handlePreventDefault(event); 
                handleAddToCart(dish.id, total);
                setTotal(1)
              }}
              btn_price={btn_price}
              icon={icon}
            />
          </OrderInfos>
        </>
      )
    }
    return null;
}