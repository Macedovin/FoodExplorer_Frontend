import { Container, Brand, LogoText, Form } from './styles';

import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';

import { name_validation, email_validation, password_validation } from '../../utilities/inputValidation';

import { api } from '../../services/api';

import { Loading } from '../../components/Loading'
import { Toast } from '../../Toast';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/Input/PasswordInput';
import { Button } from '../../components/Button';

import { ReactComponent as LogoIcon } from '../../assets/icons/Start_logo.svg';

export function SignUp() {

  const [showLoading, setShowLoading] = useState(false);

  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'all',
    defaultValues: {
      name: '', 
      email: '', 
      password: ''
    }
  }); 

  async function handleSignUp({ name, email, password }) {

    setShowLoading(true);

    await api.post('/users', { name, email, password })
      .then(() => {
        Toast().handleSuccess('Usuário cadastrado com sucesso.');

        navigate('/')
      })
      .catch(error => {
        if(error.response) {
          Toast().handleError(error.response.data.message);
          setShowLoading(false);
        } else {
          Toast().handleError('Não foi possível cadastrar');
          setShowLoading(false);
        }
      })
  }

  return(
    <Container>
      
      {showLoading && <Loading />}

      <Brand>
        <LogoIcon />
        <LogoText>
          <h1>food Explorer</h1>
        </LogoText>
      </Brand>

      <Form
        onSubmit={handleSubmit(handleSignUp)}
        noValidate
      >
        <h2>
          Crie sua conta
        </h2>
        <Input
          label='Seu nome'
          id='name' 
          type='text'
          placeholder='Exemplo: Maria da Silva'
          errors={errors.name?.message}
          {...register('name', {
            ...name_validation
          })}
        />

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
          id='password' 
          placeholder='No mínimo 6 caracteres'
          minLength='6'
          errors={errors.password?.message}
          {...register('password', {
            ...password_validation
          })}
        />

        <Button
          className='handle'
          type='submit'
          title='Criar conta'
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  );
}