import { Container, MenuIcon, MenuHeader, MenuList, MenuButtonLink } from './styles';

import { useState, useEffect } from 'react';

import { useAuth } from '../../hooks/auth';
import { useSearchData } from '../../hooks/searchData';
import { useCart } from '../../hooks/cart';
import { useConfirmDialog } from '../../hooks/confirmDialog';

import { useNavigate } from 'react-router-dom';

import { userLinks } from '../../utilities/userLinks';
import { adminLinks } from '../../utilities/adminLinks';

import { ProfileDiv } from '../ProfileDiv'; 
import { SearchInput } from '../SearchInput';
import { MenuCustomLink } from './MenuCustomLink';
import { Footer } from '../Footer';

export function MenuMobile() { 
  const { handleSearchChange, setSearch } = useSearchData();
  const confirm = useConfirmDialog();
  const { getCartQuantity, emptyCart } = useCart();
  
  const navigate = useNavigate();

  const { signOut, isAdmin } = useAuth();

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

  function handleSearchRedirect() {
    navigate('/');    
  }

  function setSignOutState() {
    signOut();
    
    setSearch('');

    navigate('/', { replace: true });
  }

  async function handleSignOut() {

    if(getCartQuantity > 0) {
      
      const userConfirmLogout = await confirm({
        description: 'Existem produtos no carrinho de compras! Deseja sair sem finalizar o pedido?',
        confirmButtonLabel: 'Sim, sair'
      });

      if (userConfirmLogout) {
        setSignOutState()

        emptyCart();
      }

      return updateMenu();
    } 

    setSignOutState()
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
            type='text'
            clearBtn
            placeholder='Busque por pratos ou ingredientes'
            onChange={handleSearchChange}
            onClick={() => {
              handleSearchRedirect();
              updateMenu();
            }}
          />
          <nav>
            <MenuList>
              {
                isAdmin 
                
                ? adminLinks.map(link => (

                    <MenuCustomLink 
                      key={link.name}
                      to={link.to}
                      onClick={updateMenu}
                      name={link.name}
                    />    

                  ))
                : userLinks.map(link => (
                
                  <MenuCustomLink 
                    key={link.name}
                    to={link.to}
                    onClick={updateMenu}
                    name={link.name}
                  />               
  
                ))              
              }
              
              <MenuButtonLink 
                onClick={handleSignOut}
              >
                <button>
                  Sair
                </button>
              </MenuButtonLink>
            </MenuList>
          </nav>
        </main>
        <Footer />
      </div>
    </Container>
  );
}