import { Container } from './styles';

import { useState } from 'react';

import { ReactComponent as DarkerTheme } from '../../assets/icons/Moon.svg';
import { ReactComponent as LighterTheme } from '../../assets/icons/Sun.svg';

//import { darkTheme, lightTheme } from '../../styles/theme';

export function ThemeSwitcher({ onClick, isToggle = false, ...rest }) {

  const [theme, setTheme] = useState('dark');

  const isDarkTheme = theme === 'dark';

  return (
    <Container>
      {isDarkTheme ? <DarkerTheme /> : <LighterTheme />}
    </Container>
  )
}