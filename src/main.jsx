import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/global';

import { CustomThemeProvider } from './hooks/theme';
import { AuthProvider } from './hooks/auth';
import{ DishesProvider } from './hooks/dishes' 
import { SearchDataProvider } from './hooks/searchData';


import { ToastContainer } from 'react-toastify';
 
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <Fragment>
        <GlobalStyles />
        <ToastContainer autoClose={3000}/>        <AuthProvider>
          <DishesProvider>
          <SearchDataProvider>
            <Routes />
          </SearchDataProvider>
          </DishesProvider>
        </AuthProvider>
      </Fragment>
    </CustomThemeProvider>
  </React.StrictMode>
)