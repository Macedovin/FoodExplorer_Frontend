import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/global';

import { CustomThemeProvider } from './hooks/theme';

import { Home } from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <Fragment>
        <GlobalStyles />
        <Home />
      </Fragment>
    </CustomThemeProvider>
  </React.StrictMode>
)