import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';

export function HeaderNewDish() {
  const navigate= useNavigate();
  
  function handleRedirect() {
    navigate('/new_dish');
  }

  return (
    <Button 
      className='new_dish-btn'
      title='Novo prato'
      onClick={handleRedirect}
    />
  );
}