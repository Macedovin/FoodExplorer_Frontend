import { Container, Form } from './styles';

import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';
 
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <h2>
        Faça seu login
      </h2>
      <Form>
        <>
          <Input
            label='Email'
            type='email' 
            placeholder='Exemplo: exemplo@exemplo.com.br'
            onChange={e => setEmail(e.target.value)}
          />
        </>

        <PasswordInput
          label='Senha'
          placeholder="No mínimo 6 caracteres"
          minLength='6'
          onChange={e => setPassword(e.target.value)}
        />
        
        <Button 
          className='handle'
          title='Entrar'
          //onClick={handleSignIn}
        />

        <Link to="/register">
          Criar conta
        </Link>
      </Form>
    </Container>
  )
}