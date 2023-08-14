import { IconButton } from '../../components/IconButton';

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth.jsx';
import { useSearchData } from '../../hooks/searchData';
import { useCart } from '../../hooks/cart';
import { useConfirmDialog } from '../../hooks/confirmDialog';

import { ReactComponent as LogOut } from '../../assets/icons/UploadSimple.svg';

export function HeaderLogout() {
  const { signOut } = useAuth();
  const { search, setSearch } = useSearchData();
  const { getCartQuantity, emptyCart } = useCart();
  const confirm = useConfirmDialog();
   
  const navigate = useNavigate();

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
        setSignOutState();
         
        emptyCart();
      }

      return 
    }

    setSignOutState();
  }

  return (
    <IconButton
      className='leave-btn'
      onClick={handleSignOut}
    >
      <LogOut />
    </IconButton>
  )
}