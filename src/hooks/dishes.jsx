import { createContext, useContext, useState, useEffect } from 'react';

export const DishesContext = createContext({});

export function DishesProvider({ children }) {
  return (
    <DishesContext.Provider value={{
      valor: 'conteúdo de um hook'
    }}>
      {children}
    </DishesContext.Provider>
  );
}

function useDishes() {
  const context = useContext(DishesContext);

  return context;
}

export { DishesProvider, useDishes }