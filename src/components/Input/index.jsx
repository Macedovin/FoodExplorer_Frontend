import { Container } from './styles';

export function Input({ label, ...rest }) {
  return(
    <Container>
      <label>
        {label}
        <input {...rest} />
      </label>
    </Container>
  )
}