import { Container } from './styles';

import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth'; 

export function ProfileDiv({ onClick }) {

  const { user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/avatar/${user.avatar}` : avatarPlaceholder;

  return (
    <Container 
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
  
