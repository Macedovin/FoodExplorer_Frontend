import { Brand, LogoText } from './styles'

import { useAuth } from '../../hooks/auth';

import { ReactComponent as LogoIcon } from '../../assets/icons/Logo_polygon.svg'; 

export function HeaderBrand() {
  const { isAdmin } = useAuth();

  return (
    <Brand to='/'>
      <LogoIcon />
      <LogoText>
        <h1>food Explorer</h1>
        {isAdmin && <p>admin</p>}
      </LogoText>
    </Brand>
  );
}