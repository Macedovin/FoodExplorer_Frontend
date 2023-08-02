import { IconButton } from '../IconButton';
import { ButtonText } from '../ButtonText';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as FavoritesIcon } from '../../assets/icons/Heart.svg';
 
export function HeaderFavorites() {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate('/favorites');
  }

  return(
    <>    
      <IconButton
        className='favorite-bdg'
        onClick={handleRedirect}
      >
        <FavoritesIcon />
      </IconButton>

      <ButtonText
        className='favorite-btn'
        title='Meus favoritos'
        onClick={handleRedirect}
      />
    </>
  );
}