import { Container } from './styles';

import { NavLink } from 'react-router-dom';

export function MenuCustomLink({ to, children, onClick, ...rest }) {
  return (
    <Container onClick={onClick} {...rest}>
      <NavLink to={to}>
        {children}
      </NavLink>
    </Container>
  )
}