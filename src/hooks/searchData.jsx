 import { createContext, useContext, useState } from 'react';
 
export const SearchDataContext = createContext({});

function SearchDataProvider({ children }) {
  
  const [search, setSearch] = useState('');

  function handleSearchChange(event) {
    
    const searchValue = event.target.value;

    setSearch(searchValue);

  }

  return(
    <SearchDataContext.Provider value={{
        handleSearchChange,
        search,
        setSearch
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