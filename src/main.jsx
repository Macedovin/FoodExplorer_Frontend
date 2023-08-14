import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/global';

import { CustomThemeProvider } from './hooks/theme';
import { AuthProvider } from './hooks/auth';
import { SearchDataProvider } from './hooks/searchData';
import { ConfirmDialogProvider } from './hooks/confirmDialog';
import { CartProvider } from './hooks/cart';

import { ToastContainer } from 'react-toastify';
 
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <GlobalStyles />
      <ToastContainer autoClose={3000}/>        
      <AuthProvider>
        <ConfirmDialogProvider>
        <SearchDataProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </SearchDataProvider>
        </ConfirmDialogProvider>
      </AuthProvider>
    </CustomThemeProvider>
  </React.StrictMode>
)