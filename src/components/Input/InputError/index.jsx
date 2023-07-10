import { Container } from './styles';

import { ReactComponent as X_Error } from '../../../assets/icons/x-altx-alt.svg';

export function InputError({ isInvalid, message }) {
  return (
    <Container>
      <X_Error />
      {message}
    </Container>
  )
}