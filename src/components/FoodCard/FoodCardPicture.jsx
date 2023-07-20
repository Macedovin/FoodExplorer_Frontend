import { Picture } from './styles';

import { api } from '../../services/api';

import picturePlaceholder from '../../assets/icons/dish_picture.svg';

export function FoodCardPicture({ dish, src }) {
  const { picture, name } = dish;

  const pictureURL = picture ? `${api.defaults.baseURL}/files/picture/${picture}` : picturePlaceholder;
  
  return (
    <Picture className='cardPicture'>
      <img 
        src={pictureURL} 
        alt={`Imagem de ${name}`} 
      />
    </Picture>
  );
}