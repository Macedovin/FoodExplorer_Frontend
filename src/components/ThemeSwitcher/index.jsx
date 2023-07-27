import { ThemeButton } from './styles.js' 

import { useTheme } from '../../hooks/theme';

import { ReactComponent as DarkerTheme } from '../../assets/icons/Moon.svg';
import { ReactComponent as LighterTheme } from '../../assets/icons/Sun.svg';

export function ThemeSwitcher({ onClick, ...rest }) {

  const { toggleTheme, theme } = useTheme();

  const isDarkTheme = theme === 'dark';

  function handleToggleTheme() {
    toggleTheme();
  }

  return (
    <ThemeButton 
      onClick={handleToggleTheme}
      className={isDarkTheme ? 'light' : 'dark'} 
    >
      {isDarkTheme ? <LighterTheme /> : <DarkerTheme />}
    </ThemeButton>
  )
}