import { createContext, useContext, useState, useRef } from 'react'

import { WindowConfirm } from '../components/WindowConfirm';

export const ConfirmDialogContext = createContext({});

function ConfirmDialogProvider({ children }) {
  const storedFunction = useRef();

  const [state, setState] = useState({ isOpen: false });

  const confirm = (data) => {
    return new Promise((resolve) => {
      setState({ ...data, isOpen: true });

      storedFunction.current = (userChoice) => {
        resolve(userChoice);
        setState({ isOpen: false });
      }
    })
  }

  return (
    <ConfirmDialogContext.Provider value={
      confirm
    }>
      {children}
      <WindowConfirm 
        {...state}
        isOpen={state.isOpen}
        onClose={() => storedFunction.current(false)}
        onConfirm={() => storedFunction.current(true)}
      />
    </ConfirmDialogContext.Provider>  
  );
}

function useConfirmDialog() {
  const context = useContext(ConfirmDialogContext);

  return context;
}

export { ConfirmDialogProvider, useConfirmDialog };