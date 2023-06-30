import { Container, Form } from './styles';

import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { useForm } from 'react-hook-form';

import { email_validation, password_validation } from '../../utilities/inputValidation'; 

import { Loading } from '../../components/Loading';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';
 
import { Link } from 'react-router-dom';

export function SignIn() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, formState: { errors },  handleSubmit } = useForm({
    mode: 'all',
  }); 

  const { signIn, showLoading } = useAuth();
  
  function handleSignIn({ email, password }) {
    signIn({email, password});
  } 

  return (
    <Container> 
      { showLoading && <Loading /> }

      <Form
        onSubmit={handleSubmit(handleSignIn)}
        noValidate
      >
        <h2>
          Faça login
        </h2>
        <Input
          label='Email'
          id='email'
          type='email' 
          placeholder='Exemplo: exemplo@exemplo.com.br'
          onChange={e => setEmail(e.target.value)}
          errors={errors.email?.message}
          {...register('email', {
            ...email_validation
          })}
        />

        <PasswordInput
          label='Senha'
          placeholder='No mínimo 6 caracteres'
          onChange={e => setPassword(e.target.value)}
          errors={errors.password?.message}
          {...register('password', {
            ...password_validation
          })}
        />
        
        <Button 
          className='handle'
          type='submit'
          title='Entrar'
        />

        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>

    </Container>
  )
}