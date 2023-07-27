import { Container } from './styles';

import { useSearchData } from '../../hooks/searchData';

import { IconButton } from '../IconButton';

import { ReactComponent as MagnifyGlass } from '../../assets/icons/search.svg';
import { ReactComponent as ClearTheInput } from '../../assets/icons/Close.svg';

export function SearchInput({ className, onClick, onChange, clearBtn, ...rest }) {

  const { search, setSearch } = useSearchData();

  const handleSubmit = (e) => e.preventDefault();

  function handleClearSearch() {
    setSearch('');
  }

  return(
    <Container 
      onSubmit={handleSubmit}
      className={className}
    >
      <IconButton 
        className='search'
        type='submit'
        onClick={onClick}
      >
        <MagnifyGlass  />      
      </IconButton>
        
        <input 
          onChange={onChange}
          value={search}
          {...rest} 
        />
      
      {clearBtn &&
        <IconButton
          className='clear'
          type='button'
          onClick={handleClearSearch} 
        >
          <ClearTheInput />
        </IconButton>
      }
    </Container>
  )
}