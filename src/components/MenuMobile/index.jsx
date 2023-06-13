import { Container, MenuIcon, MenuList } from './styles';

import { useState } from 'react';

import { MenuHeader } from '../MenuHeader';
import { useEffect } from 'react';

export function MenuMobile() {
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');

  const [menu_class, setMenuClass] = useState('menu hidden');

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  
  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('menu hidden');
    }

    setIsMenuClicked(!isMenuClicked);
  }

  useEffect(() => {
    document.body.style.overflowY = isMenuClicked ? 'hidden' : 'auto';
  }, [isMenuClicked]);

  return(
    <Container>
      <MenuIcon className="burger_menu" onClick={updateMenu}>
        <div className={burger_class} ></div>
        <div className={burger_class} ></div>
        <div className={burger_class} ></div>
      </MenuIcon>
      <div className={menu_class}>
        <MenuHeader />
        <nav>
          <MenuList>
            <li className="MenuLi" onClick={updateMenu}>
              <a href="#">
                Meus favoritos
              </a>
            </li>
            <li className="MenuLi" onClick={updateMenu}>
              <a href="#">
                  Pedidos
              </a>
            </li>
            <li className="MenuLi" onClick={updateMenu}>
              <a href="#">
                Histórico de pedidos
              </a>
            </li>
            <li className="MenuLi" onClick={updateMenu}>
              <a href="#">
                Sair
              </a>
            </li>
          </MenuList>
        </nav>
      </div>
    </Container>
  );
}