import { SelectContainer } from './styles'; 

export function SelectWrapper({ children }) {
  return(
    <SelectContainer
      className='select'
    > 
      {children}
    </SelectContainer>   
  );
}