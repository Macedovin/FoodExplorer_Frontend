import { Container } from './styles';

export function Button({ className, type, title, quantity, btn_price, disabled, icon: Icon, ...rest }) {

  return(
    <Container
      className={className}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {Icon && <Icon size={32} />}
      {title}
      {quantity && `(${quantity})`}
      {btn_price && ` · ${btn_price}`}
    </Container>
  );
}