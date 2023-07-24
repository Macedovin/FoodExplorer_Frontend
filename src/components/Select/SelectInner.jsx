import { InnerSelect, OptionsList } from './styles';

import { useState, useRef } from 'react'
 
import { Button } from '../Button';

import { ReactComponent as DropDown } from '../../assets/icons/CaretDown.svg';
import { useEffect } from 'react';

export function SelectInner({ id, selectValue, onChange, hasEmptyOption = false, options, placeholder }) {

  const containerRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState('');
 
  function handleToggleOpen() {
    setIsOpen(prevState => !prevState)
  }

  function handleEmptyOption(option) {
    console.log('Fui clicado')
    onChange(option === '' && selectValue === '');

    setIsOpen(false);
  }

  function handleSelectOption(option) {
    onChange(option); 
  }

  function isOptionSelected(option) {
    return option == selectValue ;
  }

/*   useEffect(() => {
    console.log('Estou no effect do select');
    console.log(containerRef.current);

    const handlerEvents = (event) => {
        if (event.target != containerRef.current) return
      console.log(event.code);
      
        switch (event.code) {
          case 'Enter':
          case 'Space':
            console.log('Enter ou space clicado');
            setIsOpen(prevState => !prevState);
            if (isOpen) {
              handleSelectOption(options[highlightedOption]);
            }
            break;
          case 'ArrowUp':
          case 'ArrowDown':
            console.log('setas clicadas')
            
            const newValue = highlightedIndex + (event.code === 'ArrowDown' ? 1 : -1);

            if (newValue >= 0 && newValue < options.length) {
              setHighlightedIndex(newValue);
            }

            break;
        }
    } 

    containerRef.current?.addEventListener('keydown', handlerEvents);

    return () => {
      containerRef.current?.removeEventListener('keydown', handlerEvents);
    }
  }, [isOpen, highlightedIndex, options]); */

  return(
    <>
      <InnerSelect
        className='inner-select'
        onClick={handleToggleOpen}
        ref={containerRef}
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
        
          {
            hasEmptyOption &&
            
              <li 
                className='option'
                onClick={(event) => {
                  event.stopPropagation()
                  handleEmptyOption()
                }}
              ></li>
          }

          {options && options.map((option, index) => (
            
            <li
              className={`option ${
                  isOptionSelected(option) ? 'selected' : ''
                } ${
                  index === highlightedIndex ? 'highlighted' : ''
                }`}
              key={String(option.value)}
              onClick={(event) => {
                event.stopPropagation()
                handleSelectOption(option)
                setIsOpen(false)
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option.label}
            </li>
            
          ))}
        </OptionsList>    
      </InnerSelect>
    </>
  );
}