import { Container } from './styles';

import { ReactComponent as FoodLoading } from '../../assets/icons/Food_loading.svg'; 

export function Loading() {
  return (
    <Container>
      <FoodLoading />
    </Container> 
  );
}