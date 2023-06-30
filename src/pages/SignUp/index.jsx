import { Container, Form } from './styles';

import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { name_validation, email_validation, password_validation } from '../../utilities/inputValidation';

import { Link, useNavigate } from 'react-router-dom';

import { Loading } from '../../components/Loading'
import { Toast } from '../../Toast';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';

import { api } from '../../services/api';

export function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showLoading, setShowLoading] = useState(false);

  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'all',
  }); 

  function handleSignUp({ name, email, password }) {
    console.log(name, email, password);

    setShowLoading(true);

    api.post('/users', { name, email, password })
      .then(() => {
        Toast().handleSuccess('Usuário cadastrado com sucesso');

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
          onChange={e => setName(e.target.value)}
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
          onChange={e => setEmail(e.target.value)}
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
          onChange={e => setPassword(e.target.value)}
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