import { Container } from './styles';

import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth'; 

import avatarPlaceholder from '../../assets/icons/avatar.svg';

export function ProfileDiv({ className, onClick }) {

  const { user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/avatar/${user.avatar}` : avatarPlaceholder;

  return (
    <Container 
      className={className}
      to='/profile'
      onClick={onClick}
    >
      <div>
        <span>Bem-vindo,</span>
        <strong>{user.name}</strong>
      </div>

      <img 
        src={avatarURL} 
        alt={`Foto de ${user.name}`}  
      />
    </Container>
  ); 
}
  
