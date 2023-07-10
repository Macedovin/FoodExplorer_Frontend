import { Container, Brand, LogoText, Form } from './styles';

import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { useForm } from 'react-hook-form';

import { email_validation, password_validation } from '../../utilities/inputValidation'; 

import { Loading } from '../../components/Loading';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/Input/PasswordInput';
import { Button } from '../../components/Button';

import { ReactComponent as LogoIcon } from '../../assets/icons/Logo_polygon.svg';
 
import { Link } from 'react-router-dom';

export function SignIn() {
  
  const { signIn, showLoading } = useAuth();

  const { register, formState: { errors },  handleSubmit } = useForm({
    mode: 'all',
    defaultValues: { 
      email: '', 
      password: ''
    }
  }); 

  function handleSignIn({ email, password }) {

    signIn({email, password});
  } 

  return (
    <Container> 
      
      { showLoading && <Loading /> }

      <Brand>
        <LogoIcon />
        <LogoText>
          <h1>food Explorer</h1>
        </LogoText>
      </Brand>

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
          errors={errors.email?.message}
          {...register('email', {
            ...email_validation
          })}
        />

        <PasswordInput
          label='Senha'
          placeholder='No mínimo 6 caracteres'
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