import { Container } from './styles';

import { ConditionalLink } from './ConditionalLink'; 

export function FoodCardRoot({ isLink = false, to, children, ...rest }) {
  //const { isAdmin } = useAuth();
  
  //const { id, name, description, picture, price, ingredients } = dish;
  
  return (
    <ConditionalLink 
      isLink={isLink}
      to={to}
    >
      <Container {...rest}>
        {children}
      </Container>
    </ConditionalLink> 
  );
}