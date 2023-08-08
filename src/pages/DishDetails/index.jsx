import { Container } from './styles';

import { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { Loading } from '../../components/Loading';
import { TurnBackButton } from '../../components/TurnBackButton';
import { FoodCard } from '../../components/FoodCard';
import { Button } from '../../components/Button';

import { ReactComponent as Receipt } from '../../assets/icons/Receipt.svg';

import { formatCurrency } from '../../utilities/formatCurrency';

export function DishDetails() {
  const { isAdmin } = useAuth();

  const params = useParams();

  const navigate = useNavigate();

  const [dish, setDish] = useState({});

  const [showLoading, setShowLoading] = useState(false);
  
  function handleEditRedirect() {
    navigate(`/edit_dish/${params.id}`)
  }

  useEffect(() => {
    async function fetchDish() {
      setShowLoading(true);
      
      try {
        const response = await api.get(`/dishes/${params.id}`);
       
        setDish(response.data);
        
      } catch(error) {
        if(error.response) {
          return Toast().handleError(error.response.data.message);
        } else {
          Toast().handleError('No momento, não foi possível carregar as informações do prato!');
        }
      }

      setShowLoading(false);
    }
    
    fetchDish();
    
  }, []);

  return (
    <Container>
      
      {showLoading && <Loading />}

      <TurnBackButton
        className='goBack'
      />
      
      <FoodCard.Root className='foodInfos' >
        <FoodCard.Picture 
          dish={
            {
              picture: dish.picture,
              name: dish.dish_name
            }
          }
        />
        <div
          className='desktop-break_point'
        >
          <FoodCard.FoodInfos 
            dish={
              {
                name: dish.dish_name,
                description: dish.description,
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
                dish={
                  {id: dish.dish_id}
                }
              />
          }
        </div>
      </FoodCard.Root>
    </Container>
  );
}