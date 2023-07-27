import { Container, Image, GradientText, Text } from './styles';

export function Banner({ className }) {
  return ( 
    <Container
      className={className}
    >
      <Image />
      <GradientText>
          <Text>
            <h2>
              Sabores inigualáveis
            </h2>
            <p>
            Sinta o cuidado do preparo com ingredientes selecionados.
            </p>
          </Text>
      </GradientText>
    </Container>
  );
}