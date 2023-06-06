import { Container, TopCard, Picture, FoodInfos, OrderInfos} from './styles';

import { useState } from 'react';

import { Button } from '../Button';

import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';
import { ReactComponent as Pencil } from '../../assets/icons/Pencil.svg';
import { ReactComponent as Remove } from '../../assets/icons/Minus.svg';
import { ReactComponent as Add } from '../../assets/icons/Plus.svg';

export function FoodCard({ data, ...rest }) {
  
  const [total, setTotal] = useState(1);

  function remove() {
    setTotal((prevState) => prevState - 1);
  }

  function add() {
    setTotal((prevState) => prevState + 1);  
  }

  return(
    <Container>
      <TopCard>
        <Heart />
      </TopCard>
      <Picture />
      <FoodInfos>
        <h2>
          {data.name + " >"}           
        </h2> 
        
        <p>{data.description}</p>
        <h3>{data.price}</h3>
      </FoodInfos>
      <OrderInfos>
        <div className="quantity">
          <Remove />
            <span>{total < 10 ? `0${total}` : total}</span>
          <Add />
        </div>
        <Button 
          title="incluir"
        />
      </OrderInfos>
    </Container>
  );
}