import { FoodInfos } from './styles';

import { formatCurrency } from '../../utilities/formatCurrency';

export function FoodCardFoodInfos({ dish }) {
  const { name, description, price } = dish;

  return (
    <FoodInfos className='dishData'>
      <h2>
        {name}            
      </h2> 
      
      <p>{description}</p>
      <h3>{formatCurrency(price)}</h3>
    </FoodInfos>
  );
}