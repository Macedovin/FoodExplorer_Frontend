import { Container } from './styles';

import { ReactComponent as MagnifyGlass } from '../../assets/icons/search.svg';

export function SearchInput({ onClick, onChange, ...rest }) {

  const handleSubmit = (e) => e.preventDefault();

  return(
    <Container onSubmit={handleSubmit}>
        <MagnifyGlass onClick={onClick} />      
        
        <input 
          onChange={onChange}
          {...rest} 
        />
    </Container>
  )
}