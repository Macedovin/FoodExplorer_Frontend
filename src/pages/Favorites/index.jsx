import { Container, Empty } from './styles';

import { useState, useEffect } from 'react';

import { useConfirmDialog } from '../../hooks/confirmDialog';

import { api } from '../../services/api';

import { Toast } from '../../Toast';

import { Loading } from '../../components/Loading';
import { TurnBackButton } from '../../components/TurnBackButton';
import { RemoveItemCard } from '../../components/RemoveItemCard';

import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';
 

export function Favorites() {
  const confirm = useConfirmDialog();

  const [userFavorites, setUserFavorites] = useState([]); 
  
  const [showLoading, setShowLoading] = useState(false);
  
  async function handleRemoveFavorite(deleted) {
    console.log('Vou remover um favorito.... ->', deleted.dish_id);
    
    const userRemoveFavorite = await confirm({
      description: `O prato "${deleted.name}" será removido da sua lista de favoritos. 
      
      Deseja prosseguir?`,
      confirmButtonLabel: 'Sim, remover'
    })
    
    if (userRemoveFavorite) {

      try {
        await api.delete(`favorites/${deleted.dish_id}`);
        
        setUserFavorites(prevState => prevState.filter(dish => dish !== deleted));

        Toast().handleSuccess('Favorito removido com sucesso!');
      } catch(error) {
        if (error.response) {
          Toast().handleError(error.response.data.message);
        } else {
          Toast().handleError('Infelizmente, no momento, não foi possível remover o prato.')
        }
      }
    }  
  }
  
  useEffect(() => {
    async function fetchFavorites() {
      setShowLoading(true);

      try {

        const response = await api.get('favorites');  
  
        setUserFavorites(response.data);
  
        console.log(response.data);
      } catch(error) {
        if (error.response) {
          Toast().handleError(error.response.data.message)
        } else {
          Toast().handleError('No momento, não foi possível carregar seus pratos favoritos.')
        }
      }

      setShowLoading(false);
    }

    fetchFavorites();
  }, [])
  
  return (
    <Container>

      {showLoading && <Loading /> }

      <TurnBackButton />

      <h1>
        Meus Favoritos
      </h1>


        {userFavorites && !!userFavorites.length
          
          ?
            <>                
              <section
                className='fav-cards'
              > 
                {userFavorites.map (dish => {
                  const { favorite_id, name, picture } = dish;     

                  return (

                    <RemoveItemCard
                      key={String(favorite_id)}
                      className='remove-favorite'
                      dish={
                        {
                          picture: picture,
                          name: name
                        }
                      }
                      title='Remover dos favoritos'
                      icon
                      onClick={() =>handleRemoveFavorite(dish)}
                    />
                  )

                })}
              </section>
            </>
          :
            (
              <Empty>
                <h2>Você ainda não favoritou nenhuma de nossas delícias...</h2>

                <Heart />
              </Empty>
            )

        }

    </Container>

  );
}