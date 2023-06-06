import React, { Fragment, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
 
import { darkTheme, lightTheme } from './styles/theme';

import { Home } from './pages/Home';

export function AppBasis () {
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
  
  return (

    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Fragment>
        <GlobalStyles />
        <Home />
      </Fragment>
    </ThemeProvider>
  );

}