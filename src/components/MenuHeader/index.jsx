import { Container, Profile } from './styles';

export function MenuHeader() {
  return(
    <Container>
      <h2>
        Menu
      </h2>
      <Profile>
        <div>
          <span>Bem-vindo,</span>
          <strong>Vinicius Macedo</strong>
        </div>

        <img 
          src="https://github.com/Macedovin.png" 
          alt="Foto do usuário" 
        />

      </Profile>
    </Container>
  );
}