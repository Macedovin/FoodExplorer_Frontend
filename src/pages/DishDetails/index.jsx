import { Container } from './styles';

import { Link } from 'react-router-dom';

import { ReactComponent as ArrowLeft } from '../../assets/icons/CaretLeft.svg';
import { ReactComponent as Receipt } from '../../assets/icons/Receipt.svg';
 
import { FoodCard } from '../../components/FoodCard';

export function DishDetails() {
  return (
    <Container>
      <Link to="/home">
        <ArrowLeft />
        voltar
      </Link>
      <FoodCard
        className='foodInfos' 
        dish={
          {
            name: 'Camarão',
            description: 'Muito camarão comum monte de coisa junto deles.',
            ingredients: [
              {id: 1, name: 'alface'},
              {id: 2, name: 'cebola'},
              {id: 3, name: 'pão naan'},
              {id: 4, name: 'pepino'},
              {id: 5, name: 'rabanete'},
              {id: 6, name: 'tomate'},
              {id: 7, name: 'chicória'},
            ]
          }
        }
        button={
          {
            title: 'pedir',
            btn_price: 'R$ 25,00',
            icon: Receipt
          }
        }
      />
    </Container>
  );
}