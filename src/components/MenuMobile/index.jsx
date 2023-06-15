import { Container, MenuIcon, MenuList } from './styles';

import { useState, useEffect } from 'react';

import { MenuHeader } from '../MenuHeader';
import { MenuCustomLink } from '../MenuCustomLink';
import { Footer } from '../Footer';

import { Link, NavLink } from 'react-router-dom';

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
        <main>
          <nav>
            <MenuList>
              <MenuCustomLink to='/favorites'>
                Meus favoritos
              </MenuCustomLink>
              <MenuCustomLink to='/orders'>
                Pedidos
              </MenuCustomLink>
              <MenuCustomLink to='/order_history'>
                Histórico de pedidos
              </MenuCustomLink>
              <MenuCustomLink to='/'>
                Sair
              </MenuCustomLink>
            </MenuList>
          </nav>
        </main>
        <Footer />
      </div>
    </Container>
  );
}