import { FoodIngredients } from './styles';

import { IngredientsTag } from '../IngredientsTag';

export function FoodCardIngredients({ ingredients }) {
  
  return (
    <FoodIngredients className='dishIngredients'>
      {ingredients && 

        ingredients.map(ingredients => (

          <IngredientsTag 
            key={String(ingredients.id)}
            value={ingredients.name}
          />

        ))
      }
    </FoodIngredients>
  );
}