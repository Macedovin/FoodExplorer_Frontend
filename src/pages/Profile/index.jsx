import { Container, Form, Avatar } from './styles';

import { useState } from 'react'

import { useForm } from 'react-hook-form';

import { useAuth } from '../../hooks/auth'; 

import { name_validation, email_validation, password_validation } from '../../utilities/inputValidation';

import { api } from '../../services/api';
 
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/Input/PasswordInput';
import { Button } from '../../components/Button';
import { TurnBackButton } from '../../components/TurnBackButton';

import avatarPlaceholder from '../../assets/icons/avatar.svg';
import { ReactComponent as Camera} from '../../assets/icons/Câmera.svg';

export function Profile() {

  const { user, updateUserProfile } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/avatar/${user.avatar}` : avatarPlaceholder;
  
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'all',
    defaultValues: {
      name: `${user.name}`,
      email: `${user.email}`,
      old_password: '',
      new_password: ''
    }
  });

  async function handleUpdate({ name, email, new_password, old_password }) {
    event.preventDefault();

    console.log(name, email, new_password, old_password);

    const updatedInfos = {
      new_name: name,
      new_email: email,
      new_password: new_password,
      current_password: old_password,
    }

    await updateUserProfile({ user: updatedInfos, avatarFile });
  }

  function handleAvatarChange(event) {
    const file = event.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    
    setAvatar(imagePreview);
  } 

  return (

    <Container>

      <TurnBackButton />

      <h1>
      Dados do perfil
      </h1>

      <Form         
        onSubmit={handleSubmit(handleUpdate)}
        noValidate
      >
        <Avatar>
          <img src={avatar} alt={`Foto de ${user.name}`} />

          <label htmlFor='avatar'>
            <Camera />

            <input 
              id='avatar'
              type='file'
              onChange={handleAvatarChange} 
            />      
          </label>
        </Avatar>

        <Input 
          label='Seu nome'
          id='name'
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
          label='Senha atual'
          id='old_password' 
          placeholder='No mínimo 6 caracteres'
          errors={errors.old_password?.message}
          {...register('old_password', {
            ...password_validation
          })}
        />

        <PasswordInput
          label='Nova senha'
          id='new_password' 
          placeholder='No mínimo 6 caracteres'
          errors={errors.new_password?.message}
          {...register('new_password', {
            ...password_validation
          })}
        />

        <Button 
          className='handle'
          type='submit'
          title='Salvar'
        />
      </Form>

    </Container>

  );
}