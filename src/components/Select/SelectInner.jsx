import { InnerSelect, OptionsList } from './styles';

import { useState } from 'react'
 
import { Button } from '../Button';

import { ReactComponent as DropDown } from '../../assets/icons/CaretDown.svg';

export function SelectInner({ id, selectValue, onChange, options, placeholder }) {

  const [isOpen, setIsOpen] = useState(false);
 
  function handleToggleOpen() {
    setIsOpen(prevState => !prevState)
  }

  function handleEmptyOption(option) {
    console.log('Fui clicado')
    onChange(option === '');
  }

  function handleSelectOption(option) {

    if (option !== selectValue){
      console.log('Sou diferente...')
      
      onChange(option)
    } 

    console.log('Sou o mesmo')
  }

  return(
    <>
      <InnerSelect
        className='inner-select'
        onClick={handleToggleOpen}
      >
        <span
          id={id}
        >
          {selectValue ? selectValue?.label : placeholder}
        </span>
        <Button
          type='button' 
          icon={DropDown}
        />
        <OptionsList className={isOpen ? 'show' : ''} >

          <li 
            onClick={(event) => {
              event.stopPropagation()
              handleEmptyOption()
            }}
          ></li>

          {options && options.map(option => (
            
            <li
              key={String(option.value)}
              onClick={(event) => {
                event.stopPropagation()
                handleSelectOption(option)
                setIsOpen(false)
              }}
            >
              {option.label}
            </li>
            
          ))}
        </OptionsList>    
      </InnerSelect>
    </>
  );
}