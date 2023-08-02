import { IconButton } from '../IconButton';
import { ButtonText } from '../ButtonText';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as AllUsers } from '../../assets/icons/Users.svg';

export function HeaderUsers() {
  const navigate = useNavigate(); 

  function handleRedirect() {
    navigate('/users_list');
  }

  return(
    <>
      <IconButton
        className='all-users-bdg'
        onClick={handleRedirect}
      >
        <AllUsers />
      </IconButton>

      <ButtonText
        className='all-users-btn'
        title='Usuários'
        onClick={handleRedirect}
      />
    </>
  );
}