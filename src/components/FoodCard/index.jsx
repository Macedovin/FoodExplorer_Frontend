import { Container, TopCard, Picture, FoodInfos, FoodIngredients, OrderInfos } from './styles';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { IngredientsTag } from '../IngredientsTag'; 

import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';
import { ReactComponent as FullHeart } from '../../assets/icons/FullHeart.svg';
import { ReactComponent as Remove } from '../../assets/icons/Minus.svg';
import { ReactComponent as Add } from '../../assets/icons/Plus.svg';
import { useEffect } from 'react';

export function FoodCard({ data, title, price, icon, ...rest }) {
  
  const [total, setTotal] = useState(1);

  const [isFavorite, setIsFavorite] = useState(false);

  function handlePreventDefault(event) {
    if (event.defaultPrevented) return;  
    event.preventDefault();
  }

  function handleFavoritedChange(event) {
    handlePreventDefault(event);

    console.log(isFavorite);
    
    if(!isFavorite) {
      setIsFavorite(true); 
    }
    
    // setIsFavorite(false);
  }

  function handleRemove(event) {
    handlePreventDefault(event);

    setTotal((prevState) => Math.max(prevState - 1, 1));
  }

  function handleAdd(event) {
    handlePreventDefault(event);

    setTotal((prevState) => prevState + 1);  
  }

  return(
  /*   <Link to='#'> */
    <Container {...rest}>
      <TopCard>
        <IconButton className='heart' onClick={handleFavoritedChange}>
          {!isFavorite ? <Heart /> : <FullHeart />}
        </IconButton>
      </TopCard>
      <Picture className='cardPicture' />
      <FoodInfos className='dishData'>
        <h2>
          {data.name}            
        </h2> 
        
        <p>{data.description}</p>
        <h3>{data.price}</h3>
      </FoodInfos>
      <FoodIngredients className='dishIngredients'>
        {data.ingredients && 

          data.ingredients.map(ingredients => (

            <IngredientsTag 
              key={String(ingredients.id)}
              name={ingredients.name}
            />

          ))

        }
      </FoodIngredients>
      <OrderInfos id='orderData' >
        <div className="quantity">
          <IconButton onClick={handleRemove}>
            <Remove  />
          </IconButton>
            <span>{total < 10 ? `0${total}` : total}</span>
          <IconButton onClick={handleAdd}>
            <Add  />
          </IconButton>
        </div>
        <Button
          className='include' 
          title={title}
          onClick={handlePreventDefault}
          price={price}
          icon={icon}
        />
      </OrderInfos>
    </Container>
/*     </Link> */
  );
}