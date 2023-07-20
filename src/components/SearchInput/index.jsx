import { Container } from './styles';

import { IconButton } from '../IconButton';

import { ReactComponent as MagnifyGlass } from '../../assets/icons/search.svg';

export function SearchInput({ onClick, onChange, ...rest }) {

  const handleSubmit = (e) => e.preventDefault();

  return(
    <Container onSubmit={handleSubmit}>
      <IconButton 
        type='submit'
        onClick={onClick}
      >
        <MagnifyGlass  />      
      </IconButton>
        
        <input 
          onChange={onChange}
          {...rest} 
        />
    </Container>
  )
}