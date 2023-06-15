import { Container } from './styles';

export function ProfileDiv({ onClick }) {
  return (
    <Container 
      to='/profile' 
      onClick={onClick}
    >
      <div>
        <span>Bem-vindo,</span>
        <strong>Vinicius Macedo</strong>
      </div>

      <img 
        src="https://github.com/Macedovin.png" 
        alt="Foto do usuário" 
      />
    </Container>
  ); 
}
  
