import { Container } from './styles';

import { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { FoodCard } from '../../components/FoodCard';
import { TurnBackButton } from '../../components/TurnBackButton';
import { Button } from '../../components/Button';

import { ReactComponent as Receipt } from '../../assets/icons/Receipt.svg';

import { formatCurrency } from '../../utilities/formatCurrency';

export function DishDetails() {
  const { isAdmin } = useAuth();
  const params = useParams();

  const navigate = useNavigate();

  const [dish, setDish] = useState({}); 
  const [isFavorite, setIsFavorite] = useState(false);

  function handlePreventDefault(event) {
    if (event.defaultPrevented) return;  
    event.preventDefault();
  }

  function handleEditRedirect() {
    navigate(`/edit_dish/${dish.id}`)
  }

/*   function handleFavoritedChange(event) {
    handlePreventDefault(event);

    console.log(isFavorite);
    
    if(!isFavorite) {
      setIsFavorite(true); 
    }
    
    // setIsFavorite(false);
  } */

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);

      console.log(response.data);

      setDish(response.data);
    }

    fetchDish();
  }, [])

  return (
    <Container>

      <TurnBackButton
        className='goBack'
      />
      
      <FoodCard.Root className='foodInfos' >
        <FoodCard.Picture 
          dish={
            {
              picture: dish.picture,
              name: dish.name
            }
          }
        />
        <FoodCard.FoodInfos 
          dish={
            {
              name: dish.name,
              description: dish.description
            }
          }
        />
        <FoodCard.Ingredients 
          ingredients={dish.dishIngredients}
        />
        {isAdmin 
          ?   
            <Button
              className='edit-redirect' 
              title='Editar prato'
              onClick={handleEditRedirect}
            />
          :    
            <FoodCard.OrderInfos 
              button={
                {
                  title: 'pedir',
                  btn_price: formatCurrency(dish.price),
                  icon: Receipt
                }
              }
            />
        }
        </FoodCard.Root>
    </Container>
  );
}