import { Container } from './styles';

export function Button({ type, title, quantity, btn_price, icon: Icon, ...rest }) {

  return(
    <Container
      type={type}
      {...rest}
    >
      {Icon && <Icon size={32} />}
      {title}
      {quantity && `(${quantity})`}
      {btn_price && ` · ${btn_price}`}
    </Container>
  );
}