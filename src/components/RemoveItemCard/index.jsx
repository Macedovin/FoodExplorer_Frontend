import { Container, FoodInfo, Remove } from './styles'; 

import { api } from '../../services/api';

import { ButtonText } from '../ButtonText';

import { ReactComponent as FullHeart } from '../../assets/icons/FullHeart.svg';

import picturePlaceholder from '../../assets/icons/dish_picture.svg';

import { formatCurrency } from '../../utilities/formatCurrency';

export function RemoveItemCard({ number = false, dish, title, icon: Icon, onClick, ...rest }) {
  const { picture, name, price, quantity } = dish;
  
  const pictureURL = picture ? `${api.defaults.baseURL}/files/picture/${picture}`: picturePlaceholder; 

  return (
    <Container
      {...rest}
    >    
      <img 
        src={pictureURL} 
        alt={`Imagem de ${name}`} 
      />

      <FoodInfo>
        <div className='data'>
          {quantity && (
            <span
              className='amount'
            >
              {quantity} X
            </span>
          )}
          <p>
            {name}
          </p>

        </div>
        <Remove>
          <ButtonText
            className='exclude' 
            title={title}
            onClick={onClick}
          />
        </Remove>
      </FoodInfo>

      {
        Icon && <FullHeart />
      }

      {
        price && (
          <p
            className='price'
          >
            {formatCurrency(price)}
          </p>
      )}
    </Container>
  );
}