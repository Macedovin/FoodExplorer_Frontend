import React, { createContext, useContext, useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
 
import { darkTheme, lightTheme } from '../styles/theme';

export const ThemeContext = createContext();

function CustomThemeProvider({ children }) {
  
  const [theme, setTheme] = useState('dark');

  const isDarkTheme = theme === 'dark';
  
  const toggleTheme = () => {
    if (isDarkTheme) {
      localStorage.setItem('@foodexplorer:theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('@foodexplorer:theme', 'dark')
      setTheme('dark');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{
      toggleTheme,
      theme
    }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export { CustomThemeProvider, useTheme };
