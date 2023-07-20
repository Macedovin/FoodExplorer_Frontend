 import { createContext, useContext, useState } from 'react';
 
export const SearchDataContext = createContext({});

function SearchDataProvider({ children }) {
  
  const [search, setSearch] = useState('');

  function handleSearchChange(event) {
    
    const searchValue = event.target.value;

    console.log(searchValue);

    setSearch(searchValue);

    console.log(search);
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