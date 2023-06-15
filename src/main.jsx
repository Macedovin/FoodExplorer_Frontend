import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/global';

import { CustomThemeProvider } from './hooks/theme';
import { SearchDataProvider } from './hooks/searchData';
 
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <Fragment>
        <GlobalStyles />
        <SearchDataProvider>
          <Routes />
        </SearchDataProvider>
      </Fragment>
    </CustomThemeProvider>
  </React.StrictMode>
)