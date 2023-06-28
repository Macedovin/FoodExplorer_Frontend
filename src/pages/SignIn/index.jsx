import { Container, Form } from './styles';

import { useForm } from 'react-hook-form';

import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { email_validation, password_validation } from '../../utilities/inputValidation'; 

import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';

import { ReactComponent as EyeOn } from '../../assets/icons/eye.svg';
 
import { Link } from 'react-router-dom';

export function SignIn() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, formState: { errors },  handleSubmit } = useForm({
    mode: 'all',
  }); 

  /* ---------------------------- */

  const { signIn } = useAuth();
  
  function handleSignIn(data) {

    if(!data) 
    console.log('Preencha todos os dados!')

    signIn(data);
  } 

  return (
    <Container>
      {/*       {showLoading && <Loading />}
      <Background /> */}

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
            //onClick={handleSignIn()} 
          />

          <Link to="/register">
            Criar uma conta
          </Link>
        </Form>

    </Container>
  )
}