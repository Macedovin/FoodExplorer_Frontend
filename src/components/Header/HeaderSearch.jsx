import { SearchInput } from '../SearchInput';

import { useSearchData } from '../../hooks/searchData';

import { useNavigate } from 'react-router-dom';

export function HeaderSearch() {
  const { handleSearchChange, search, setSearch } = useSearchData();

  const navigate = useNavigate();

  function handleSearchRedirect() {
    navigate('/');
  }

  return (
    <SearchInput 
      className='larger-search'
      type='text'
      placeholder='Busque por pratos ou ingredientes'
      onChange={handleSearchChange}
      onClick={handleSearchRedirect}
    />
  );
}