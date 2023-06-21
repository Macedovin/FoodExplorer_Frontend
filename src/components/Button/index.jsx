import { Container } from './styles';

export function Button({ title, quantity, price, icon: Icon, ...rest }) {
  return(
    <Container
      type='button'
      {...rest}
    >
      {Icon && <Icon size={32} />}
      {title}
      {quantity && `(${quantity})`}
      {price && ` · ${price}`}
    </Container>
  );
}