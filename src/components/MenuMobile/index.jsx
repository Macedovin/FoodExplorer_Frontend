import { Container, MenuIcon, MenuHeader, MenuList } from './styles';

import { useState, useEffect } from 'react';

import { useSearchData } from '../../hooks/searchData';


import { ProfileDiv } from '../ProfileDiv'; 
import { SearchInput } from '../SearchInput';
import { MenuCustomLink } from '../MenuCustomLink';
import { Footer } from '../Footer';

import { Link, NavLink } from 'react-router-dom';

export function MenuMobile() {
  
  const { fetchDishes } = useSearchData();

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
        <MenuHeader>
          <h2>
            Menu
          </h2>
          <ProfileDiv onClick={updateMenu} />
        </MenuHeader>
        <main>
          <SearchInput 
            placeholder='Busque por pratos ou ingredientes'
            onClick={updateMenu} // Vai ter uma outra função verificando se o input esta vazio. Se tiver não faça nada; se não tiver feche o menu. 
          />
          <nav>
            <MenuList>
              <MenuCustomLink to='/orders' onClick={updateMenu}>
                Pedidos
              </MenuCustomLink>
              <MenuCustomLink to='/favorites' onClick={updateMenu}>
                Meus favoritos
              </MenuCustomLink>
              <MenuCustomLink to='/order_history' onClick={updateMenu}>
                Histórico de pedidos
              </MenuCustomLink>
              <MenuCustomLink to='/home' onClick={updateMenu}>
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