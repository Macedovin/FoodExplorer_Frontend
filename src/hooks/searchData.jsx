 import { createContext, useContext, useState } from 'react';

/* import { api } from '../services/api'; */
 
export const SearchDataContext = createContext();

function SearchDataProvider({ children }) {

  function fetchDishes() {
    
    const logic = 'Sou a função que vai fazer a busca.'
    
    const result = 'Sou o resultado da busca.'

    return { logic, result}
    
    //`Vou fazer a busca de pratos no método index tendo como queries o nome ou um ingrediente. Vou receber "search" e "ingredients", ou o nme que tiver como como parâmetros para serem utilizados no useEffect ao chamar a função.  
  }

  return(
    <SearchDataContext.Provider value={{
        fetchDishes
      }}
    >
      {children}
    </SearchDataContext.Provider>
  )
}

function useSearchData() {
  const context = useContext(SearchDataContext);

  return context;
}

export { SearchDataProvider, useSearchData }; 