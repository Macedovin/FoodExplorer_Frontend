import { Container } from './styles';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { FoodCard } from '../../components/FoodCard';
import { IconButton } from '../../components/IconButton';

import { ReactComponent as ArrowLeft } from '../../assets/icons/CaretLeft.svg';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';
import { ReactComponent as FullHeart } from '../../assets/icons/FullHeart.svg';
import { ReactComponent as Receipt } from '../../assets/icons/Receipt.svg';

export function DishDetails() {
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

  return (
    <Container>
      <Link className='goBack' to='/home'>
        <ArrowLeft />
        voltar
      </Link>  
      <FoodCard
        className='foodInfos' 
        dish={
          {
            name: 'Camarão',
            description: 'Muito camarão comum monte de coisa junto deles.',
            ingredients: [
              {id: 1, name: 'alface'},
              {id: 2, name: 'cebola'},
              {id: 3, name: 'pão naan'},
              {id: 4, name: 'pepino'},
              {id: 5, name: 'rabanete'},
              {id: 6, name: 'tomate'},
              {id: 7, name: 'chicória'},
            ]
          }
        }
        button={
          {
            title: 'pedir',
            btn_price: 'R$ 25,00',
            icon: Receipt
          }
        }
      />
    </Container>
  );
}