import { Container } from './styles';

import { NavLink } from 'react-router-dom';

export function MenuCustomLink({ to, name, onClick, ...rest }) {
  return (
    <Container onClick={onClick} {...rest}>
      <NavLink to={to}>
        {name}
      </NavLink>
    </Container>
  )
}