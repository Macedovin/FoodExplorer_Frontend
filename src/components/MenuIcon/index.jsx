import { Container } from './styles';

import { MobileWrapper } from '../Mobile_wrapper';

export function NavBar() {
  return(
    <MobileWrapper>
      <Container>
        <div className="burger-menu">
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
        </div>
      </Container>
    </MobileWrapper>
  );
}