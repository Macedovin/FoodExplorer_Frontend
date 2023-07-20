import { TopCard } from './styles';

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api'; 

import { Toast } from '../../Toast';

import { IconButton } from '../IconButton';

import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';
import { ReactComponent as FullHeart } from '../../assets/icons/FullHeart.svg';
import { ReactComponent as Pencil } from '../../assets/icons/Pencil.svg';
import { useEffect } from 'react';

export function FoodCardTopCard({ dish }) {
  const params = useParams();

  const { id } = dish;

  const { isAdmin } = useAuth();
  
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  function handlePreventDefault(event) {
    if (event.defaultPrevented) return;  
    event.preventDefault();
  }

  function handleNavigate(event) {
    handlePreventDefault(event);

    navigate(`/edit_dish/${dish.id}`)
  }

  async function handleFavoritedChange(event) {
    handlePreventDefault(event);
    
    params.id = dish.id;

    console.log(isFavorite, params, dish.id);
    try {
      const response = await api.post(`/favorites/${params.id}`);

      Toast().handleSuccess('Prato favoritado.');
    } catch (error) {
      if(error.response) {
        Toast().handleError(error.response.data.message);
      } else {
        Toast().handleError('Não foi possível favoritar o prato.');
      }
    }

    if(!isFavorite) {
      setIsFavorite(true); 
    }
    
    // setIsFavorite(false);
  }

  useEffect(() => {


    async function fetchFavorites() {
      
      const response = await api.get('/favorites');
      
      const favorite = response.data;
  
      if(dish.id === favorite.dish_id) {
        console.log('Foi!!!');
      }
      
      
    }

    fetchFavorites();


  },[]);

  return (
    <TopCard>
      <IconButton 
        //className='heart' 
      >
        
        {isAdmin 
          ?
            <Pencil 
              className='edit'
              onClick={handleNavigate}
            />
          :
            <>  
              {!isFavorite 
                ? 
                  <Heart onClick={handleFavoritedChange} />
                : 
                  <FullHeart onClick={handleFavoritedChange} />}
            </>
        } 
      </IconButton>
    </TopCard>
  );
}