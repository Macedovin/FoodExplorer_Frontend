import { Container } from './styles';

export function Textarea({ label, id, value, ...rest}) {
  return (
     
    <Container> 
      <label htmlFor={id}>
        {label}
      </label>
      <textarea 
        id={id}
        value={value}
        {...rest}
      >
        {value}
      </textarea>
    </Container>

  );
}