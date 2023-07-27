import { IconButton } from '../../components/IconButton';

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth.jsx';

import { ReactComponent as LogOut } from '../../assets/icons/UploadSimple.svg';

export function HeaderLogout() {
  const { signOut } = useAuth();
  
  const navigate = useNavigate();
  
  function handleSignOut() {
    signOut();

    navigate('/', { replace: true }); 
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