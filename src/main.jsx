import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/global';

import { CustomThemeProvider } from './hooks/theme';
import { AuthProvider } from './hooks/auth';
import { SearchDataProvider } from './hooks/searchData';

 
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <Fragment>
        <GlobalStyles />
        <AuthProvider>
        <SearchDataProvider>
          <Routes />
        </SearchDataProvider>
        </AuthProvider>
      </Fragment>
    </CustomThemeProvider>
  </React.StrictMode>
)